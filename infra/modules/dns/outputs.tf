output "name_servers" {
  description = "Route53 nameservers — replace OVH nameservers with these"
  value       = aws_route53_zone.site.name_servers
}

output "zone_id" {
  value = aws_route53_zone.site.zone_id
}
