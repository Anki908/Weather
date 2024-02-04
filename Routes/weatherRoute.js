const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');
const validation = require('../middlewares/validation');

router.route("/weather").post(validation.userInput ,weatherController.weather);

module.exports = router;