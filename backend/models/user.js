const mongoose = require("mongoose");
const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 100,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      max: 100,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      min: 8,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", UserSchema);
