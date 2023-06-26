#!/usr/bin/env bash
git push --tags

if yarn publish . --access public --network-timeout 999999 --new-version $npm_package_version --tag latest; then
  echo "version $npm_package_version published; do not forget to push your changes to repository"
else
  echo "Publish failed"
fi

read -n 1 -s -r -p "Press any key to continue"
