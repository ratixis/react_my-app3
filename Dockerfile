FROM node:19

RUN useradd -m -s /bin/bash node-client

#USER node-client

WORKDIR /home/node-client/

COPY ./package*.json /home/node-client/
RUN chmod ugo+wrx /home/node-client/package.json
RUN chmod ugo+wrx /home/node-client/package-lock.json
RUN npm install

COPY ./public /home/node-client/public
COPY ./src /home/node-client/src


#COPY ./webpack.config.js /home/node-client/node_modules/react-scripts/config/webpack.config.js
