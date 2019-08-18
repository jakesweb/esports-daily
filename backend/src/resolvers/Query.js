const { forwardTo } = require("prisma-binding");

const Query = {
  post: forwardTo("db"),
  posts: forwardTo("db")
};

module.exports = Query;
