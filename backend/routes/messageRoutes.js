const express = require("express");
const router = express.Router();
const { getMessages, setMessage } = require("../controllers/messageController");
const { loginUser } = require("../controllers/userController");

router.route("/").get(getMessages).post(setMessage);
router.post("/login", loginUser);
module.exports = router;
