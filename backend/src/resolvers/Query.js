const { forwardTo } = require("prisma-binding");

const Query = {
  post: forwardTo("db"),
  posts: forwardTo("db"),
  me(parent, args, ctx, info) {
    if (!ctx.request.userId) {
      return null;
    }
    return ctx.db.query.users(
      {
        where: { id: ctx.request.userId }
      },
      info
    );
  }
};

module.exports = Query;
