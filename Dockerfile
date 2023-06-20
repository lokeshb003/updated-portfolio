FROM ubuntu:latest
WORKDIR /root
RUN apt update && apt install nodejs npm -y
COPY . .
RUN npm cache clean --force
RUN npm install --save
EXPOSE 3000
CMD ["npm","start"]