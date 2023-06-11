// external imports
const express = require("express");

// internal imports
const router = express.Router();
const { getInbox } = require("../controller/inboxController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

// login Router
router.get("/",decorateHtmlResponse("Inbox"), getInbox);

module.exports = router;
