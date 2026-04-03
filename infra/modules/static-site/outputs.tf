output "cloudfront_domain" {
  value = aws_cloudfront_distribution.site.domain_name
}

output "cloudfront_distribution_id" {
  value = aws_cloudfront_distribution.site.id
}

output "bucket_name" {
  value = aws_s3_bucket.site.bucket
}

# DNS records to add in OVH for ACM certificate validation
output "acm_validation_records" {
  description = "CNAME records to add in OVH DNS to validate the ACM certificate"
  value = {
    for dvo in aws_acm_certificate.site.domain_validation_options : dvo.domain_name => {
      name  = dvo.resource_record_name
      type  = dvo.resource_record_type
      value = dvo.resource_record_value
    }
  }
}

# CNAME record to add in OVH to point domain to CloudFront
output "cloudfront_cname_target" {
  description = "Point sachamorin.fr CNAME to this value in OVH DNS"
  value       = aws_cloudfront_distribution.site.domain_name
}
