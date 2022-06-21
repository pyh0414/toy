import { ApolloServer } from "apollo-server-express";
import express from "express";
import dotenv from "dotenv";

import schema from "./schema";
import context from "./context";
import { prisma } from "./context";

const app = express();

(async function () {
  dotenv.config();

  interface LazadaDefaultParams {
    sign?: string;
    app_key: string;
    timestamp: string;
    sign_method: string;
  }

  interface LazadaAuthParams extends LazadaDefaultParams {
    code?: string; // 토큰 발급을 위한 code
    refresh_token?: string;
  }

  type TEST = { age: string; name: string };
  const params: LazadaAuthParams = {
    code: "21",
    refresh_token: "test",
    sign: "asd",
    app_key: "asd",
    timestamp: "asd",
    sign_method: "asd",
  };

  type a = {
    name: string;
    address: string;
  };

  let queryString = new URLSearchParams(
    params as unknown as Record<string, string>
  ).toString();

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

  const port = 3000;
  app.listen({ port }, () => {
    console.log(`🚀 Server ready at http://localhost:${port}`);
  });
})();
