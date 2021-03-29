const path = require('path');
const express = require('express');

module.exports = (app) => {
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    });
    
    app.use(express.static('public'))    
}