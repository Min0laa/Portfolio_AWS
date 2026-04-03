module "static_site" {
  source = "./modules/static-site"

  project_name = var.project_name
  environment  = var.environment
  domain_name  = var.domain_name

  providers = {
    aws           = aws
    aws.us_east_1 = aws.us_east_1
  }
}

module "visit_api" {
  source = "./modules/visit-api"

  project_name = var.project_name
  environment  = var.environment
}

module "budget" {
  source = "./modules/bootstrap-backend"

  project_name = var.project_name
  environment  = var.environment
}

module "dns" {
  source = "./modules/dns"

  project_name             = var.project_name
  environment              = var.environment
  domain_name              = var.domain_name
  cloudfront_domain        = module.static_site.cloudfront_domain
  cloudfront_hosted_zone_id = "Z2FDTNDATAQYW2" # CloudFront global hosted zone ID (constant for all CF distributions)
}
