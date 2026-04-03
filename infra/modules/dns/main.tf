# ── ROUTE 53 HOSTED ZONE ──────────────────────────────────────────────────────
resource "aws_route53_zone" "site" {
  name = var.domain_name
  tags = {
    Project     = var.project_name
    Environment = var.environment
  }
}

# ── APEX ALIAS: sachamorin.fr → CloudFront ───────────────────────────────────
# Route53 Alias supports apex domains — CNAME at @ is impossible with OVH DNS
resource "aws_route53_record" "apex" {
  zone_id = aws_route53_zone.site.zone_id
  name    = var.domain_name
  type    = "A"

  alias {
    name                   = var.cloudfront_domain
    zone_id                = var.cloudfront_hosted_zone_id
    evaluate_target_health = false
  }
}

# ── WWW REDIRECT: www → apex ──────────────────────────────────────────────────
resource "aws_route53_record" "www" {
  zone_id = aws_route53_zone.site.zone_id
  name    = "www.${var.domain_name}"
  type    = "CNAME"
  ttl     = 300
  records = [var.domain_name]
}
