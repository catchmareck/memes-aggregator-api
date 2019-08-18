'use strict';

const express = require('express');
const router = express.Router({ mergeParams: true });

router.use('/memes', require('./memes'));

module.exports = router;
