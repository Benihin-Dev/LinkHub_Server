const userModel = require("./commentsModel&Schema");
const mongoose = require("mongoose");

const addnewuser = async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const user = await userModel.create({
      name,
      email,
      subject,
      message,
    });
    res.status(200).json(user);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

// get all user data - GET
const getalluser = async (req, res) => {
  try {
    const user = await userModel.find({});
    res.status(200).json(user);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};


// get specific user data - GET
const getuser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.findOne({ name: id });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

//Update user data - PATCH
const updateuser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.findOneAndUpdate(
      {
        name: id,
      },
      {
        ...req.body,
      },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    res.status(200).json(user);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

// delete user - DELETE
const deleteuser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await userModel.findOneAndDelete(
      {
        name: id,
      },
      {}
    );
    if (!user) {
      return res.status(404).json({ message: "User not found!.." });
    }
    res.status(200).json(user);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

module.exports = { addnewuser, getalluser, getuser, updateuser, deleteuser };
