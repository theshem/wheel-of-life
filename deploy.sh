#!/usr/bin/env sh

# abort on errors
set -e

yarn run build

cd dist

surge --project ./ --domain https://wheel-of-life.surge.sh

cd -
