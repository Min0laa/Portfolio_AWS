#!/bin/bash
# Build Lambda zip for visit counter
set -e
cd "$(dirname "$0")"
zip -j build.zip handler.py
echo "✅ build.zip created"
