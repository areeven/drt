import request from "supertest";
import { app } from "../src/server";

beforeAll(async () => {
  await app.listen(3001); // Adjust the port as needed
});

describe("Test user routes", () => {
  it("should return 200 for GET /users", async () => {
    const response = await request(app).get("/users");
    expect(response.status).toBe(200);
  });

  it("should return 404 for GET /users/1", async () => {
    const response = await request(app).get("/users/1");
    expect(response.status).toBe(404);
  });

  it("should return 201 for POST /users", async () => {
    const response = await request(app).post("/users").send({
      firstName: "John",
      lastName: "Doe",
      email: "emilie.ost1990@outlook.com",
      password: "password",
      admin: true,
    });
    expect(response.status).toBe(201);
  });
});
