locals {
  prefix = "${var.project_name}-${var.environment}"
}

# ── DYNAMODB TABLE ───────────────────────────────────────────────────────────
resource "aws_dynamodb_table" "visits" {
  name         = "${local.prefix}-visits"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "id"

  attribute {
    name = "id"
    type = "S"
  }

  tags = {
    Project     = var.project_name
    Environment = var.environment
  }
}

# ── LAMBDA IAM ROLE ──────────────────────────────────────────────────────────
data "aws_iam_policy_document" "lambda_assume" {
  statement {
    effect  = "Allow"
    actions = ["sts:AssumeRole"]
    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }
  }
}

resource "aws_iam_role" "lambda" {
  name               = "${local.prefix}-lambda-role"
  assume_role_policy = data.aws_iam_policy_document.lambda_assume.json
}

data "aws_iam_policy_document" "lambda_policy" {
  statement {
    effect = "Allow"
    actions = [
      "dynamodb:GetItem",
      "dynamodb:PutItem",
      "dynamodb:UpdateItem",
    ]
    resources = [aws_dynamodb_table.visits.arn]
  }
  statement {
    effect = "Allow"
    actions = [
      "logs:CreateLogGroup",
      "logs:CreateLogStream",
      "logs:PutLogEvents",
    ]
    resources = ["arn:aws:logs:*:*:*"]
  }
}

resource "aws_iam_role_policy" "lambda" {
  name   = "${local.prefix}-lambda-policy"
  role   = aws_iam_role.lambda.id
  policy = data.aws_iam_policy_document.lambda_policy.json
}

# ── LAMBDA FUNCTION ──────────────────────────────────────────────────────────
resource "aws_lambda_function" "visit" {
  function_name    = "${local.prefix}-visit-counter"
  role             = aws_iam_role.lambda.arn
  handler          = "handler.lambda_handler"
  runtime          = "python3.12"
  filename         = "${path.module}/../../lambda/visit/build.zip"
  source_code_hash = filebase64sha256("${path.module}/../../lambda/visit/build.zip")

  environment {
    variables = {
      TABLE_NAME = aws_dynamodb_table.visits.name
    }
  }

  tags = {
    Project     = var.project_name
    Environment = var.environment
  }
}

# ── API GATEWAY ──────────────────────────────────────────────────────────────
resource "aws_apigatewayv2_api" "visit" {
  name          = "${local.prefix}-visit-api"
  protocol_type = "HTTP"

  cors_configuration {
    allow_origins = ["*"]
    allow_methods = ["GET", "OPTIONS"]
    allow_headers = ["Content-Type"]
  }
}

resource "aws_apigatewayv2_integration" "visit" {
  api_id                 = aws_apigatewayv2_api.visit.id
  integration_type       = "AWS_PROXY"
  integration_uri        = aws_lambda_function.visit.invoke_arn
  payload_format_version = "2.0"
}

resource "aws_apigatewayv2_route" "visit" {
  api_id    = aws_apigatewayv2_api.visit.id
  route_key = "GET /visit"
  target    = "integrations/${aws_apigatewayv2_integration.visit.id}"
}

resource "aws_apigatewayv2_stage" "visit" {
  api_id      = aws_apigatewayv2_api.visit.id
  name        = "$default"
  auto_deploy = true
}

resource "aws_lambda_permission" "apigw" {
  statement_id  = "AllowAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.visit.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.visit.execution_arn}/*/*"
}
