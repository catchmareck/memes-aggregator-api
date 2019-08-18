'use strict';

const express = require('express');
const router = express.Router({ mergeParams: true });

const validate = require('./validation-schemas/memes-schema');
const MemesController = require('../controllers/memes');
const log = require('../logger');

router.get('/read/all', (request, response) => {
    
    const controller = new MemesController(request, response);
    controller.fetchAll()
        .then(({ Items }) => {
            
            const result = Items.map(({ MemeName: { S: memeName }, MemeUrl: { S: memeUrl } }) => ({ memeName, memeUrl }));
            response.send(result);
        })
        .catch((error) => {
            
            log.error(error);
            response.sendStatus(424);
        });
});

module.exports = router;
