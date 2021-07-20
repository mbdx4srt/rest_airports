const originalairports = require("./airports.json");
const airports = require("./airports");
const app = require("./app");
const request = require("supertest");

describe("airport tests", () => {
    test("GET /airports should return all airports", (done) => {
        request(app)
            .get("/airports")
            .expect("Content-Type", /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual(originalairports);
                done();
            });
    });
    test("POST /airports should create the new Airport", (done) => {
        const newairport = {
            "icao": "zsrt",
            "iata": "",
            "name": "Sams Airstrip",
            "city": "Notting Hill",
            "state": "London",
            "country": "UK",
            "elevation": 100,
            "lat": 0.0,
            "lon": -1.0046,
            "tz": "GMT",
        };
        const expectedairportList = [...originalairports];
        expectedairportList.push(newairport);
        request(app)
            .post("/airports")
            .send(newairport)
            .expect(201)
            .end(() => {
                expect(airports).toEqual(expectedairportList);
                return done();
            });
    });
});
