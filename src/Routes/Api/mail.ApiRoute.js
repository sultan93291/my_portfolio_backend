

const express = require("express");
const {
  emailHandler,
} = require("../../Controller/mailController/mailController");

const { Router } = express;
const router = Router();

router.route("/send-mail").post(emailHandler);


module.exports = router;
