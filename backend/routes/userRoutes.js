const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/register", userController.registerUser); // register a new user
router.post("/login", userController.loginUser); // login as user
router.post("/avatar", userController.uploadAvatar); // upload new avatar
router.put("/nickname/:nick", userController.updateNickname); // set a new nickname
router.put("/", userController.updateUserDetails); // update user details
router.get("/", userController.getAllUsers); // get all users
router.get("/:user", userController.getUser); // get a user

module.exports = router;