#!/bin/bash
# deploy.sh — Sync portfolio files to S3 + invalidate CloudFront cache
set -e

# ── Variables ──────────────────────────────────────────────────────────────
PORTFOLIO_DIR="$(cd "$(dirname "$0")" && pwd)"
INFRA_DIR="$PORTFOLIO_DIR/infra"

# Read outputs from Terraform
echo "📦 Reading Terraform outputs..."
cd "$INFRA_DIR"
BUCKET=$(terraform output -raw s3_bucket_name)
CF_ID=$(terraform output -raw cloudfront_distribution_id)
CF_URL=$(terraform output -raw cloudfront_url)

echo "🪣 Bucket     : $BUCKET"
echo "☁️  CloudFront  : $CF_ID"
echo "🌐 URL        : $CF_URL"
echo ""

# ── Upload portfolio files to S3 ────────────────────────────────────────────
echo "⬆️  Syncing portfolio files to S3..."
aws s3 sync "$PORTFOLIO_DIR" "s3://$BUCKET" \
  --exclude "infra/*" \
  --exclude ".git/*" \
  --exclude "*.sh" \
  --exclude "node_modules/*" \
  --delete

# ── Invalidate CloudFront cache ─────────────────────────────────────────────
echo "🔄 Invalidating CloudFront cache..."
aws cloudfront create-invalidation \
  --distribution-id "$CF_ID" \
  --paths "/*" \
  --query 'Invalidation.Id' \
  --output text

echo ""
echo "✅ Deploy complete!"
echo "🌐 Your portfolio: $CF_URL"
