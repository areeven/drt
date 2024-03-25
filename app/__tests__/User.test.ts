import request from "supertest";
import { app } from "../src/server";

describe("Test user routes", () => {
  it("should return 200", async () => {
    const response = await request(app).get("/users");
    expect(response.status).toBe(200);
  });

  it("should return 404", async () => {
    const response = await request(app).get("/users/1");
    expect(response.status).toBe(404);
  });

  it("should return 201", async () => {
    const response = await request(app).post("/users").send({
      name: "John Doe",
      email: "",
    });
    expect(response.status).toBe(201);
  });
});
