const express = require("express");
const airports = require("./airports");

const app = express();

app.use(express.json());

app.get("/airports", (req, res) => {
    res.json(airports);

});

app.get("/airports/:id", (req, res) => {
    id = req.params.id
    const result = airports.find(airport => airport.icao == id);
    res.json(result);

});

app.put("/airports/:id", (req, res) => {
    id = req.params.id
    var result = airports.find(airport => airport.icao == id);
    result = req.body
    console.log(result)
    res.json(result);
    res.sendStatus(200);
});


app.post("/airports", (req, res) => {
    airports.push(req.body);
    console.log(airports);
    res.sendStatus(201);
});

module.exports = app;
