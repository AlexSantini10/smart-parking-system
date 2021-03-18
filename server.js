// Import dei moduli
const express = require('express');
const path = require('path');

// Import dell'API (modulo creato da noi)
const parcheggio = require('./routes/api/parcheggio.js');

// Dichiarazione costanti per il server
const app = express();
const port = process.env.PORT || 5000;

// Cartella statica
app.use(express.static(path.join(__dirname, 'public')));

// API
app.use('/api/parcheggio', parcheggio);

// Server
var server = app.listen(port, () => {
    console.log('Server is running..');
});

