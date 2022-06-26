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

  const port = 3000;
  app.listen({ port }, () => {
    console.log(`🚀 Server ready at http://localhost:${port}`);
  });
})();
