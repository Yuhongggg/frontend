FROM node:latest

# set working directory
RUN mkdir /usr/src/frontend
WORKDIR /usr/src/frontend

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/frontend/package.json
RUN npm install --silent
RUN npm install react-scripts@2.1.5 -g --silent

# add app
COPY . /usr/src/frontend

# start app
CMD ["npm", "start"]