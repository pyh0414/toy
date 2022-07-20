import { objectType, queryType } from "nexus"

const usersQuery = queryType({
  definition(t) {
    t.list.field("users", {
      type: "User",
      resolve: async (parent, args, ctx, info) => {
        return await ctx.prisma.user.findMany({})
      },
    }),
      t.field("test", {
        type: objectType({
          name: "testResult",
          definition(t) {
            t.string("name")
          },
        }),
        resolve: (parent, args, ctx, info) => {
          return {
            name: "yeonho",
          }
        },
      })
  },
})

export default {
  usersQuery,
}
