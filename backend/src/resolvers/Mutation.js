const bcrypt = require("bcryptjs");

const Mutation = {
  async createPost(parent, args, ctx, info) {
    const post = await ctx.db.mutation.createPost(
      {
        data: {
          ...args
        }
      },
      info
    );
    return post;
  },

  async signup(parent, args, ctx, info) {
    args.email = args.email.toLowerCase();
    // hash password
    const password = await bcrypt.hash(args.password, 10);
    // create the user
    const user = await ctx.db.mutation.createUsers(
      {
        data: {
          ...args,
          password,
          permissions: { set: ["USERS"] }
        }
      },
      info
    );
    return user;
  }
};

module.exports = Mutation;
