FROM node:lts-alpine3.16

USER node

WORKDIR /home/node/my-code

COPY . .

RUN npm ci

CMD [ "node", "index.js" ]