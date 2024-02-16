const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PaidUserSchema = new Schema(
  {
    firstname: { type: String },
    lastname: { type: String },
    useremail: { type: String },
    username: { type: String, unique: true },
    password: { type: String },
    socialMedia: {
      whatsapp: { type: [String], default: [] },
      facebook: { type: [String], default: [] },
      youtube: { type: [String], default: [] },
      email: { type: [String], default: [] },
      linkedin: { type: [String], default: [] },
      instagram: { type: [String], default: [] },
      telegram: { type: [String], default: [] },
      snapchat: { type: [String], default: [] },
      tiktok: { type: [String], default: [] },
      reddit: { type: [String], default: [] },
      x: { type: [String], default: [] },
      threads: { type: [String], default: [] },
      flickr: { type: [String], default: [] },
      github: { type: [String], default: [] },
      pinterest: { type: [String], default: [] },
      meetup: { type: [String], default: [] },
      sinaWeibo: { type: [String], default: [] },
      fiverr: { type: [String], default: [] },
      tinder: { type: [String], default: [] },
      tumblr: { type: [String], default: [] },
      xing: { type: [String], default: [] },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("paidUser", PaidUserSchema);
