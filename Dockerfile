# Base Image
FROM node:alpine

# Maintainer Information
MAINTAINER Imre Nagi <imre.nagi2812@gmail.com>

# Copying files to src directory
ADD . /src
WORKDIR /src
ADD package.json /src/package.json

# Installing all dependencies required by application
RUN npm install

# Tell the port number the container should expose
EXPOSE 8080

# Run the application
CMD npm start
