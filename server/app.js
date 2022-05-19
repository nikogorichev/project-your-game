const express = require('express');
const config = require('./config');
const mainRoute = require('./routes/views/main.route');
const regRoute = require('./routes/api/reg.route');

const app = express();

const PORT = 4000;

config(app);

app.use('/', mainRoute);
app.use('/', regRoute);

app.listen(PORT, () => console.log(`***Server started at ${PORT} port***`));
