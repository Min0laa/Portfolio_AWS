output "cloudfront_url" {
  description = "Public URL of the portfolio (CloudFront)"
  value       = "https://${module.static_site.cloudfront_domain}"
}

output "s3_bucket_name" {
  description = "S3 bucket containing portfolio files"
  value       = module.static_site.bucket_name
}

output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID (needed for cache invalidation)"
  value       = module.static_site.cloudfront_distribution_id
}

output "visit_api_url" {
  description = "Visit counter API endpoint"
  value       = module.visit_api.api_url
}

output "route53_nameservers" {
  description = "⚠️  Set these 4 nameservers in OVH to activate sachamorin.fr → CloudFront"
  value       = module.dns.name_servers
}
