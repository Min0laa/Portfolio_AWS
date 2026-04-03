output "api_url" {
  value = "${aws_apigatewayv2_stage.visit.invoke_url}/visit"
}
