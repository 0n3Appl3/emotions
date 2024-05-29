const express = require("express");
const router = express.Router();
const followerController = require("../controllers/followerController");

router.get("/following/:user", followerController.getFollowing); // get who a user follows
router.get("/followers/:user", followerController.getFollowers); // get user's followers
router.post("/", followerController.followUser); // follow user
router.delete("/", followerController.unfollowUser); // unfollow user

module.exports = router;