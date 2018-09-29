FROM node:alpine as node
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN $(npm bin)/ng build --prod --build-optimizer

FROM nginx:alpine
COPY --from=node /usr/src/app/dist/web-client /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx.conf.d/default.conf
