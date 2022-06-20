FROM alpine:latest

RUN apk add gettext
RUN apk add caddy

WORKDIR /app

COPY exampleSite ./site
COPY src/server/run.sh ./
COPY src/server/Caddyfile ./

ENTRYPOINT /app/run.sh
