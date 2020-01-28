FROM node:12.12.0-alpine

WORKDIR /server/

COPY package*.json /server/

RUN npm install --silent

COPY . /server

EXPOSE 5000/tcp

CMD ["npm", "dev"]




# # ========================== #
# # Stage 1: Building Code
# FROM node:12.12.0-alpine as builder

# # Create app directory
# WORKDIR /usr/src/app

# # Install app dependencies
# # A wildcard is used to ensure both package.json AND package-lock.json are copied
# # where available (npm@5+)
# COPY package*.json ./

# RUN npm install
# # If you are building your code for production
# # RUN npm ci --only=production

# # Bundle app source
# COPY . .
# RUN npm run build


# # Stage 2
# FROM node
# WORKDIR /usr/src/app
# COPY package*.json ./
# RUN npm install --production

# COPY --from=builder /usr/app/dist ./dist

# COPY package*.json .
# COPY .env .
# EXPOSE 5000
# CMD node dist/src/index.js