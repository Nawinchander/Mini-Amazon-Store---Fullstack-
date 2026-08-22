const request = require("supertest");

const app = require("../app");

describe("Authentication API", () => {

    test("POST /api/auth/login returns token", async () => {

        const response = await request(app)
            .post("/api/auth/login")
            .send({
                email: "test@test.com",
                password: "123456"
            });

        expect(response.statusCode)
            .toBe(200);

        expect(response.body)
            .toHaveProperty("token");

    });


    test("POST /api/auth/login rejects invalid credentials", async () => {

        const response = await request(app)
            .post("/api/auth/login")
            .send({
                email: "wrong@test.com",
                password: "wrongpassword"
            });

        expect(response.statusCode)
            .toBeGreaterThanOrEqual(400);

    });


    test("Protected product API rejects missing token", async () => {

        const response = await request(app)
            .post("/api/products")
            .send({
                name: "Test Product",
                price: 1000,
                category: "Test"
            });

        expect(response.statusCode)
            .toBe(401);

    });

});


