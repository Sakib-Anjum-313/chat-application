// external imports
const express = require("express");

// internal imports
const router = express.Router();
const {getLogin } = require("../controller/loginController");


// login Router
router.get("/", getLogin);




module.exports = router;