import { objectType } from "nexus";

const User = objectType({
  name: "User",
  definition(t) {
    t.nonNull.id("id");
    t.string("email");
    t.string("name");
    t.int("age");
    t.list.field("posts", {
      type: "Post",
      resolve: async (parent, args, ctx, info) => {
        return ctx.prisma.user
          .findUnique({
            where: {
              id: parent.id,
            },
          })
          .posts();
      },
    });
  },
});

const Post = objectType({
  name: "Post",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.string("content");
    t.nonNull.string("userId");
    t.field("user", {
      type: "User",
      resolve: async (parent, args, ctx, info) => {
        return await ctx.prisma.user.findUnique({
          where: {
            id: parent.userId!,
          },
        });
      },
    });
  },
});

export default {
  User,
  Post,
};
