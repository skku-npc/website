FROM node:14-alpine3.12

ENV NODE_ENV=production

ADD backend /app
ADD frontend /app/temp
WORKDIR /app

RUN yarn install --production
RUN cd /app/temp && yarn install --production && yarn run build && mv build /app && cd /app && rm -rf /app/temp

CMD ["yarn", "start"]
