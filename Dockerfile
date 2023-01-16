FROM node:10.16.3 as build 


WORKDIR /opt/frontend


COPY package.json ./


RUN npm install


COPY . .


RUN npm run build


FROM nginx:1.19


COPY ./nginx/nginx.conf /etc/nginx/nginx.conf


COPY --from=build /react-app/build /usr/share/nginx/html