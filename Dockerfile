FROM node:14


WORKDIR /app
COPY . ./

RUN npm install && npx prisma generate && npm build
COPY . .

EXPOSE 3000
CMD [ "node", "build/index.js" ]