#!/usr/bin/env sh

envsubst < index.html > temp.html && mv temp.html index.html
envsubst < js/params.js > temp.js && mv temp.js js/params.js
envsubst < manifest.plist > temp.plist && mv temp.plist manifest.plist

rm run.sh

caddy run
