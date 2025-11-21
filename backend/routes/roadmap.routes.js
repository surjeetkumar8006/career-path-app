const express = require("express");
const router = express.Router();
const controller = require("../controllers/roadmap.controller");

router.post("/", controller.generateRoadmap);

module.exports = router;
