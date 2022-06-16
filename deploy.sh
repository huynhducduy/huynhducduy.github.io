#!/bin/sh

# If a command fails then the deploy stops
set -e

printf "\033[0;32mDeploying updates to GitHub...\033[0m\n"

hugo
cd public
git init
git remote add origin git@github.com:huynhducduy/huynhducduy.github.io.git
git add -A
msg="rebuilding site $(date)"
if [ -n "$*" ]; then
	msg="$*"
fi
git commit -m "$msg"
git push -f origin main
