const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
    // generate the jwt
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    // set the cookie with the token
    ctx.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365
    });
    // return the user
    return user;
  },

  async signin(parent, { email, password }, ctx, info) {
    // check if user exists
    const user = await ctx.db.query.users({ where: { email } });
    if (!user) {
      throw new Error("No such user found for email ${email}");
    }
    // check if their password is correct
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error("Invalid password");
    }
    // generate the jwt
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    // set the cookie with the token
    ctx.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365
    });
    // return the user
    return user;
  },

  signout(parent, args, ctx, info) {
    ctx.response.clearCookie("token");
    return { message: "Goodbye!" };
  }
};

module.exports = Mutation;
