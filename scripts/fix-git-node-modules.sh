#!/bin/bash
# This script removes node_modules from git tracking if it's incorrectly tracked as a file

# Check if node_modules is tracked as a file
if git ls-files | grep -q '^node_modules$'; then
  echo "Found node_modules tracked as file in git, removing..."
  git rm --cached node_modules
  git commit -m "Remove node_modules file from git tracking"
  git push origin HEAD
  echo "Successfully removed node_modules from git tracking"
else
  echo "node_modules is not tracked as a file in git"
fi

# Ensure node_modules/ is in .gitignore
if ! grep -q '^node_modules/' .gitignore; then
  echo "node_modules/" >> .gitignore
  git add .gitignore
  git commit -m "Ensure node_modules is in .gitignore"
  git push origin HEAD
  echo "Updated .gitignore"
else
  echo "node_modules/ is already in .gitignore"
fi
