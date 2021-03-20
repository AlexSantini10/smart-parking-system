const express = require('express');
const router = express.Router();
const path = require('path');
const mysql = require('mysql');

// Creazione di una connessione a database
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "parcheggio"
});

router.get('/posti', (req, res) => {
    con.query("SELECT * FROM posti WHERE 1", (err, result) => {
        if (err) throw err;

        res.json(result[0]);
    });
});

router.get('/log', (req, res) => {
    con.query("SELECT * FROM log WHERE 1", (err, result) => {
        if (err) throw err;

        res.json(result);
    });
});

router.get('/toUpdate', (req, res) => {
    con.query("SELECT * FROM toUpdate WHERE 1", (err, result) => {
        if (err) throw err;

        res.json(result[0]);
    });
});

router.get('/setUpdated', (req, res) => {
    con.query("UPDATE toUpdate SET isToUpdate=0");
});

router.get('/postMaintenance/:pos', (req, res) => {
    con.query("SELECT * FROM posti", (err, posti) => {
        if (err) throw err;

        posti = posti[0];

        var newDispo = req.params.pos - (posti.postiTotali - posti.postiDisponibili);
        
        if (newDispo>=0){
            con.query("UPDATE posti SET postiTotali=" + req.params.pos + " WHERE 1");
            con.query("UPDATE posti SET postiDisponibili=" + newDispo + " WHERE 1");
        }
        
    });
});

module.exports = router;