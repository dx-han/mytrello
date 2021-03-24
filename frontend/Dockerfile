FROM node:12.18.3

WORKDIR /frontend
COPY package.json /frontend/
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
COPY . /frontend/
CMD ["npm", "run", "start"]