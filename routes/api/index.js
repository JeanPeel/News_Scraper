var router = require("express").Router();
var fetchRoutes = require("./fetch");
var noteRoutes = require("./notes");
var headlineRoutes = require("./headlines");
var clearRoutes = require("./clear");

router.use("/fetcj", fetchRoutes);
router.use("/notes", noteRoutes);
router.use("/headlines", headlineRoutes);
router.use("/clear", clearRoutes);

module.exports = router;