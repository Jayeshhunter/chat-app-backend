const mongoose = require("mongoose");
const { date } = require("joi");
const userSchema = mongoose.Schema({
  username: { type: String },
  email: { type: String },
  password: { type: String },
  post: [
    {
      postId: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
      post: { type: String },
      created: { type: Date, default: Date.now() },
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
