const express = require('express');
const cors = require('cors');

const app = express();

const index = require('./routes/index');
const pasienRoute = require('./routes/pasien.routes');

app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.use(express.json({ type: 'Application Backend' }));
app.use(cors());

app.use(index);
app.use('/',pasienRoute);


module.exports = app;