FROM node:alpine

RUN mkdir /app
WORKDIR /app
COPY ./package.json ./package.json
RUN npm i
COPY ./index.js ./index.js

CMD node index.js
