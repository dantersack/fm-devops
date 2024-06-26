FROM node:lts-alpine3.16

# By default the container runs with the root user.
# Here we are telling the container that we want to 
# run it with the 'node' user.
# -------------------------------------------------
# The node container ships with a user called 'node'
# that belongs to a group also called 'node'.
USER node

# Set our home directory - if it does not exist, the 
# WORKDIR command will create it for us.
WORKDIR /home/node/my-code

# --chown=user[:group]
COPY --chown=node:node index.js /home/node/my-code/index.js

CMD [ "node", "index.js" ]
