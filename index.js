const express = require('express');
const path = require('path');
const mysql = require('mysql');

const parcheggio = require('./routes/api/parcheggio.js');

const app = express();
const port = process.env.PORT || 5000;

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "parcheggio"
});

con.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
});

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/parcheggio', parcheggio);

var server = app.listen(port, () => {
    console.log('Server is running..');
});