#!/bin/bash

projectKeyArr=(
    "API_MYSQL_URL"
)

for value in "${projectKeyArr[@]}"; do
    export $value=$(curl "http://metadata.google.internal/computeMetadata/v1/instance/attributes/$value" -H "Metadata-Flavor: Google")
done