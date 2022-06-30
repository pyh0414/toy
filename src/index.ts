import { ApolloServer } from "apollo-server-express";
import express from "express";
import dotenv from "dotenv";

import schema from "./schema";
import context from "./context";
import { prisma } from "./context";

const app = express();

(async function () {
  dotenv.config();

  const server = new ApolloServer({
    schema,
    context,
    introspection: true,
  });

  await server.start();

  server.applyMiddleware({
    app,
    path: "/",
  });

  const port = 4964;
  app.listen({ port }, () => {
    console.log(`🚀 Server ready at http://localhost:${port}`);
  });
})();

// import axios, { AxiosResponse } from "axios";

// const sleep = (ms: number) => {
//   return new Promise((resolve) =>
//     setTimeout(() => {
//       console.log(`${ms}초 지남!!`);
//       resolve(ms);
//     }, ms)
//   );
// };

// const aa = async () => {
//   return "asd";
// };
// const request = async (): Promise<void> => {
//   console.log("request");
//   // await axios.get("https://www.naver.com");
//   await sleep(2);
//   console.log(`끝 !!`);
// };

// const test = async () => {
//   aa().then((c) => console.log(c));
//   setTimeout(() => {
//     console.log("@@");
//   }, 5000);
//   console.log("@");
//   await sleep(3);
//   const length = 10;

//   const promises: Promise<void>[] = [];

//   for (let i = 0; i < length; i++) {
//     // console.log(i);
//     // promises.push(request());
//     // console.log();
//   }
// };

// test();
