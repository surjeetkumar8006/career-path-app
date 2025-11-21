const express = require("express");
const router = express.Router();
const controller = require("../controllers/skillGap.controller");

router.post("/", controller.analyzeSkillGap);

module.exports = router;
