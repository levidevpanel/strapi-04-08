FROM node:16-buster

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 8080
CMD ["/bin/bash", "-c", "npm run develop"]