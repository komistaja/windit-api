FROM node:10.15.0-alpine

WORKDIR /usr/app

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD [ 'npm', 'serve' ]
