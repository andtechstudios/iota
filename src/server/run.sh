#!/usr/bin/env sh

envsubst < site/index.html > temp.html && mv temp.html site/index.html
envsubst < site/js/params.js > temp.js && mv temp.js site/js/params.js
envsubst < site/manifest.plist > temp.plist && mv temp.plist site/manifest.plist

caddy run
