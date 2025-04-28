FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --ignore-scripts

COPY . .

RUN npm run prepublish

CMD [ "node", "dist/index.js" ]