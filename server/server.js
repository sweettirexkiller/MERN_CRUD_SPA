const express = require('express');
const router = require('./routes/routes.js');
let commonPath = require('../build-utils/common-path');

let app = express();

app.set('view engine', 'ejs');
app.set('views', commonPath.appEntry);
app.use(express.static(commonPath.appEntry));

app.use('/', router);

export default app;