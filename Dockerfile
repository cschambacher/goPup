FROM node:12.12.0-alpine

WORKDIR /server/

COPY package*.json /server/

RUN npm install --silent

COPY . /server

EXPOSE 5000/tcp

CMD ["npm", "dev"]