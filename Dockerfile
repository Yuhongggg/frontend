FROM node:latest

# set working directory
RUN mkdir /usr/src/frontend
WORKDIR /usr/src/frontend

# install and cache app dependencies
COPY package.json /usr/src/frontend/package.json
RUN npm install

# add app
COPY . /usr/src/frontend

# start app
CMD ["npm", "start"]