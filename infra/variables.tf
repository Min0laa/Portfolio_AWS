variable "aws_region" {
  description = "AWS region for main resources"
  type        = string
  default     = "eu-west-3" # Paris
}

variable "project_name" {
  description = "Project prefix for all resource names"
  type        = string
  default     = "sacha-portfolio"
}

variable "environment" {
  description = "Deployment environment"
  type        = string
  default     = "prod"
}

variable "domain_name" {
  description = "Custom domain for the portfolio"
  type        = string
  default     = "sachamorin.fr"
}
