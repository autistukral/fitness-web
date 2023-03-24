const express = require('express');
const router = express.Router();
const rezervaceController = require('../../controllers/rezervaceController');

router.route('/')
    .get(rezervaceController.getAllRezervace)
    .delete(rezervaceController.deleteRezervace);

router.route('/:id')
    .get(rezervaceController.getRezervace);

module.exports = router;