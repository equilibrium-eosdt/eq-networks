#!/usr/bin/env bash
SCRIPT_RELATIVE_PATH=`dirname "$0"`
PROJECT_PATH=`( cd "$SCRIPT_RELATIVE_PATH/.." && pwd )`
git push --tags
if yarn publish . \
--access restricted \
--new-version $npm_package_version \
--tag latest; then
  echo "version $npm_package_version published; do not forget to push your changes to repository"
else
  echo "Publish failed"
fi

read -n 1 -s -r -p "Press any key to continue"
