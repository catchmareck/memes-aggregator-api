'use strict';

require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const log = require('./app/logger');
const config = require('./app/config');
const { port } = config;

const routes = require('./app/routes');

app.use(cors());
app.use(bodyParser.json());
app.use(routes);

app.listen(port, () => {

    log.info(`Listening on ${port}`);
});
