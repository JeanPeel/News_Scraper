var router = require("express").Router();
var clearController = require("../../controllers/clear");

router.get("/", clearController.clearDB);

moodule.exports = router;