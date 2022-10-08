FROM node

ENV NODE_ENV=production
EXPOSE 80
EXPOSE 443
WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

CMD [ "node", "app.js" ]