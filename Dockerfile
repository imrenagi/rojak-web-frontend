# Base Image
FROM node:alpine

# Maintainer Information
MAINTAINER Imre Nagi <imre.nagi2812@gmail.com>

# Tell the port number the container should expose
EXPOSE 8080

# Copying files to src directory
ADD . /src
WORKDIR /src
ADD package.json /src/package.json

# Installing all dependencies required by application
RUN npm install
RUN npm install webpack
RUN npm install webpack-dev-server

# Run the application
CMD npm start
