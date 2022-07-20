FROM node:14


WORKDIR /app
COPY . ./

RUN npm install && npx prisma generate && npm run build
COPY . .

CMD [ "node", "build/index.js" ]