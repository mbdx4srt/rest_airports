const express = require("express");
const airports = require("./airports");

const app = express();

app.use(express.json());

app.get("/airports", (req, res) => {
    res.json(airports);

});

app.get("/airports/:id", (req, res) => {
    id = req.params.id
    const result = airports.find(airport => airport.icao === id);
    res.json(result);

});

app.put("/airports/:id", (req, res) => {
    id = req.params.id
    for (var i = 0; i < airports.length; i++) {
        if (airports[i].icao === id) {
            airports[i] = req.body;
            break;
        }
    }
    res.sendStatus(200);
});

app.delete("/airports/:id", (req, res) => {
    id = req.params.id
    for (var i = 0; i < airports.length; i++) {
        if (airports[i].icao === id) {
            airports.splice(i,1)
            break;
        }
    }
    res.sendStatus(200);
});


app.post("/airports", (req, res) => {
    airports.push(req.body);
    console.log(airports);
    res.sendStatus(201);
});

module.exports = app;
