FROM alpine:latest
WORKDIR .
RUN apk update && apk add nodejs npm
COPY . .
RUN npm install --save
EXPOSE 3000
CMD ["npm","start"]