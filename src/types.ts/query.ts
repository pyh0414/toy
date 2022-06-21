import { queryType } from "nexus";

const usersQuery = queryType({
  definition(t) {
    t.list.field("users", {
      type: "User",
      resolve: async (parent, args, ctx, info) => {
        return await ctx.prisma.user.findMany({});
      },
    });
  },
});

export default {
  usersQuery,
};
