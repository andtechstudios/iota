FROM cicirello/gnu-on-alpine

RUN apk add git
RUN apk add gettext
COPY .local /root/.local
ENV PATH=$PATH:/root/.local/bin
