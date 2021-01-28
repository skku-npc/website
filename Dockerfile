FROM node:14-alpine3.12

ENV NODE_ENV=production

ADD . /app
WORKDIR /app

RUN yarn install && yarn run build

CMD ["yarn", "run", "server"]
