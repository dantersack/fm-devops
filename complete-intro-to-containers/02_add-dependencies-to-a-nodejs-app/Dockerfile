FROM node:lts-alpine3.16

USER node

RUN mkdir /home/node/my-code

WORKDIR /home/node/my-code

# Copy everything in this directory over into /home/node/my-code
COPY --chown=node:node . .

RUN npm ci

CMD [ "node", "index.js" ]