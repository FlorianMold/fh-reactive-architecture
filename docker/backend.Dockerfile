FROM node:16-alpine

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.nest.json ./package.json

RUN npm install --only=production

COPY dist/apps/api/ /usr/src/app/

CMD ["node", "main"]