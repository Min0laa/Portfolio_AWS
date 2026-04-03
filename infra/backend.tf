terraform {
  backend "s3" {
    bucket  = "sacha-portfolio-prod-tfstate"
    key     = "portfolio/terraform.tfstate"
    region  = "eu-west-3"
    encrypt = true
  }
}
