FROM node:14-buster-slim
WORKDIR /usr/src/app
COPY . .
RUN yarn
EXPOSE 3001
CMD yarn run prod