var express = require("express");
const { Router } = express;
const router = Router();
const authRoutes = require("./Api/mail.ApiRoute.js")

const { apiError } = require("../utils/apiError.js");




router.use(process.env.VERSION_NAME, authRoutes);
router.use(process.env.VERSION_NAME, (req, res) => {
  res.status(400).json(new apiError(false, null, 404, "Api Routes InValid !!"));
});

module.exports = router;
