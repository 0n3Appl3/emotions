const express = require("express");
const router = express.Router();
const logController = require("../controllers/logController");

router.post("/", logController.addLog); // log emotion
router.delete("/", logController.removeLog); // delete emotion log
router.put("/comment", logController.updateLogComment); // set comment to emotion log
router.put("/visible", logController.updateLogVisibility); // set log visibility
router.get("/", logController.getAllLogs); // get all logs
router.get("/user/latest/:user", logController.getLatestUserLog); // get latest user log
router.get("/user/:user", logController.getAllUserLogs); // get all user logs

module.exports = router;