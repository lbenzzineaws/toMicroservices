#FROM nginx:alpine
 
#COPY nginx.conf /etc/nginx/nginx.conf

FROM node:12
# Create app: directory

WORKDIR /usr/src/app

RUN npm ci

COPY . .

EXPOSE 8080
CMD ["npm" , "run" , "dev"]


