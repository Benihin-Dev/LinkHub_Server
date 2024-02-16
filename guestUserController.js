const userModel = require("./GuestUsermodel&schema");
const mongoose = require("mongoose");

const addnewuser = async (req, res) => {
  const {
    username,
    facebook,
    youtube,
    instagram,
    snapchat,
    tiktok,
    x,
    pinterest,
    tinder,
  } = req.body;

  try {
    const user = await userModel.create({
      username,
      facebook,
      youtube,
      instagram,
      snapchat,
      tiktok,
      x,
      pinterest,
      tinder,
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
// const getuser = async (req, res) => {
//   const { id } = req.params;
//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({ message: "User not found!.." });
//   }
//   try {
//     const user = await userModel.findById(id);
//     res.status(200).json(user);
//   } catch (e) {
//     res.status(400).json({ error: e.message });
//   }
// };

// get specific user data - GET

const getuser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.findOne({ username: id });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

//Update user data - PATCH
// const updateuser = async (req, res) => {
//   const { id } = req.params;
//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({ message: "User not found!.." });
//   }
//   try {
//     const user = await userModel.findByIdAndUpdate(
//       {
//         _id: id,
//       },
//       {
//         ...req.body,
//       }
//     );
//     res.status(200).json(user);
//   } catch (e) {
//     res.status(400).json({ error: e.message });
//   }
// };

const updateuser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.findOneAndUpdate(
      {
        username: id,
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
// const deleteuser = async (req, res) => {
//   const { id } = req.params;
//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({ message: "User not found!.." });
//   }
//   try {
//     const user = await userModel.findByIdAndDelete(
//       {
//         _id: id,
//       },
//       {}
//     );
//     res.status(200).json(user);
//   } catch (e) {
//     res.status(400).json({ error: e.message });
//   }
// };

const deleteuser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await userModel.findOneAndDelete(
      {
        username: id,
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
