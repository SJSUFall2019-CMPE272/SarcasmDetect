# base image
FROM node:12.7.0

# add `/sarcasm/node_modules/.bin` to $PATH
# ENV NODE_PATH=/sarcasm/node_modules
ENV PATH /sarcasm/node_modules/.bin:$PATH

# set working directory
WORKDIR /sarcasm

# install and cache app dependencies
COPY package.json /sarcasm/package.json
RUN npm install --verbose
RUN npm install react-scripts@3.2.0 -g

# NOTE, take out the --silent to debug

EXPOSE 3000

# start app
CMD ["npm", "start"]
