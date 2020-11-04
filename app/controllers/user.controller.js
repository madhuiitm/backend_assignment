const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;





exports.getUserDetails = (req, res) => {
  User.findOne({username: req.body.username})
  .exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }
    res.status(200).send({
      id: user._id,
      name: user.name,
      username: user.username,
      gender: user.gender,
      contactNumber: user.contactNumber,
      email: user.email,
      address: user.address
    });
  });
}

exports.getUsers = (req, res) => {
  User.find({}, (err, users) => {
  if (err) {
    res.status(500).send({ message: err });
    return;
  }
  console.log("user", users);
  res.status(200).send({
    users: users
  });
});
}


exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};
