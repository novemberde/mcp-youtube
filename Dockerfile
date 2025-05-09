FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN apk add --no-cache curl bash
RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:${PATH}"

RUN npm install --ignore-scripts

RUN apk add --no-cache yt-dlp ffmpeg

COPY . .

RUN npm run build

CMD [ "node", "dist/index.js" ]