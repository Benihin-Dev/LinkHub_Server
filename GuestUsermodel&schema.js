const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GuestUserSchema = new Schema(
  {
    username: { type: String, unique: true },
    facebook: { type: String },
    youtube: { type: String },
    instagram: { type: String },
    snapchat: { type: String },
    tiktok: { type: String },
    x: { type: String },
    pinterest: { type: String },
    tinder: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("guestUser", GuestUserSchema);
