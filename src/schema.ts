import { makeSchema } from "nexus";
import path, { join } from "path";

import types from "./types.ts";

export default makeSchema({
  features: {
    abstractTypeStrategies: {
      isTypeOf: true,
    },
  },
  types,
  contextType: {
    module: require.resolve("./context"),
    export: "Context", // context의 createContext의 return type명을 명시. 이 타입은 resolver의 ctx인자의 타입이 된다. 여기서 Context는 interface로 선언해야함.
  },
  outputs: {
    typegen: join(__dirname, "./src/generated", "nexus-typegen.ts"), // 2
    schema: join(__dirname, "./src/generated", "schema.graphql"), // 3
  },
});
