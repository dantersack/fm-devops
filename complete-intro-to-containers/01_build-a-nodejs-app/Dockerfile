FROM node:lts-alpine3.16

USER node

WORKDIR /home/node/my-code

COPY --chown=node:node index.js /home/node/my-code/index.js

CMD [ "node", "index.js" ]
