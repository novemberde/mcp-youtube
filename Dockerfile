FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g bun

RUN npm install --ignore-scripts

COPY . .

RUN npm run build

CMD [ "node", "dist/index.js" ]