const express = require('express');

require('@prisma/client');
const app = express();
require('dotenv').config();
const route = require('./routes');
const bodyParser = require('body-parser');
const multer = require('multer');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', route);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});