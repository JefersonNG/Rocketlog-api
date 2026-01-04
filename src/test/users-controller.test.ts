import { prisma } from "../database/prisma.js";
import { app } from "../app.js";
import request from "supertest";

describe("UsersController", () => {
  let userId: string;

  afterAll(async () => {
    await prisma.user.delete({
      where: {
        id: userId,
      },
    });
  });

  it("should create a new user successfully", async () => {
    const response = await request(app).post("/users").send({
      name: "Test User",
      email: "test@email.com",
      password: "12345678",
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.name).toBe("Test User");

    userId = response.body.id;
  });

  it("should throw a validation error email is exist", async () => {
    const response = await request(app).post("/users").send({
      name: "duplicate Test User",
      email: "test@email.com",
      password: "12345678",
    });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe("Email ja existe");
  });

  it("should throw a validation error id email is invalid", async () => {
    const response = await request(app).post("/users").send({
      name: "duplicate Test User",
      email: "invalid-email",
      password: "12345678",
    });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe("validation zod error");
  });
});
