// /// product test

// describe("Product Test", () => {

//     test("Check API", () => {

//         expect(true).toBe(true);

//     });

// });




const request = require("supertest");

const app = require("../app");

describe("Product API", () => {

    test("GET /api/products returns 200", async () => {

        const response = await request(app)
            .get("/api/products");

        expect(response.statusCode)
            .toBe(200);

    });


    test("GET /api/products returns products", async () => {

        const response = await request(app)
            .get("/api/products");

        expect(Array.isArray(response.body))
            .toBe(true);

    });


    test("POST /api/products rejects unauthenticated request", async () => {

        const product = {

            name: "Test Product",

            price: 1000,

            category: "Test",

            image: "test.jpg"

        };

        const response = await request(app)
            .post("/api/products")
            .send(product);

        expect(response.statusCode)
            .toBe(401);

    });


    test("POST /api/products creates product", async () => {

        const product = {

            name: "Test Product",

            price: 1000,

            category: "Test",

            image: "test.jpg"

        };

        const response = await request(app)
            .post("/api/products")
            .set(
                "Authorization",
                process.env.TEST_TOKEN
            )
            .send(product);

        expect([200, 201])
            .toContain(response.statusCode);

    });


    test("POST /api/products rejects invalid data", async () => {

        const product = {

            name: "",

            price: -100,

            category: ""

        };

        const response = await request(app)
            .post("/api/products")
            .set(
                "Authorization",
                process.env.TEST_TOKEN
            )
            .send(product);

        expect(response.statusCode)
            .toBeGreaterThanOrEqual(400);

    });

});






