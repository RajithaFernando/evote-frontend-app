FROM node:10.16.3 as build 


WORKDIR /opt/frontend


COPY package.json ./
COPY build ./

RUN npm install


COPY . .


# RUN npm run build


FROM nginx:1.19


COPY ./nginx/nginx.conf /etc/nginx/nginx.conf


COPY --from=build /opt/frontend/build /usr/share/nginx/html

EXPOSE 3000

# CMD ["nginx", "-g", "daemon off;"]

CMD ["npm", "serve", "--port 3000"]