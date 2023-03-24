const express = require('express');
const router = express.Router();
const rezervaceController = require('../controllers/rezervaceController');

router.post('/', rezervaceController.handleNewRezervace);

module.exports = router;