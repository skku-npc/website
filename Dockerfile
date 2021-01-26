FROM node:14-alpine3.12

ENV NODE_ENV=production

ADD . /app
WORKDIR /app

RUN rm -rf build client/build && yarn install && cd client && yarn install && yarn run build && mv build .. && cd .. && rm -rf client

CMD ["yarn", "start"]
