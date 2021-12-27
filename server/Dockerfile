FROM node
WORKDIR /server
EXPOSE 4000

COPY package.json .
COPY src .

RUN npm install
RUN npm run build

CMD node app.js

