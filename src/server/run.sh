#!/usr/bin/env sh

envsubst < index.html > temp.html && mv temp.html index.html
envsubst < manifest.plist > temp.plist && mv temp.plist manifest.plist

rm run.sh

caddy run
