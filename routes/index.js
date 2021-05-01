const express = require('express');
const jokesCtrl = require('../controllers/jokes');

const router = express.Router();

/* GET home page. */
router.get('/', jokesCtrl.index);

module.exports = router;
