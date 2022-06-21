import request from "supertest";
import app from "../src/app.js"

describe("GET /location", () => {
    it("respond with json", (done) => {
        request(app)
            .get("/v1/location")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200, done);
    });
});