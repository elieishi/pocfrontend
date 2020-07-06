## pull official base image
FROM node:latest

## set working directory
WORKDIR /app

## add `/app/node_modules/.bin` to $PATH
ENV PATH /node_modules/.bin:$PATH


## install app dependencies
COPY ./package.json .
COPY ./package-lock.json .
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
RUN npm cache clean --force


## add app
COPY . .

EXPOSE 3000

## create user "node" and give permissions
RUN chown -R node:node . && chmod -R 755 .
USER node

## start app
CMD ["npm", "start"]