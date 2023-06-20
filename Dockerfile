FROM ubuntu:latest
WORKDIR /root
RUN apk update && apk add nodejs npm
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm","start"]