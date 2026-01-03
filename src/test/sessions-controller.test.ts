import { prisma } from "@/database/prisma";
import { app } from "../app";
import request from "supertest";

describe("SessionsController", () => {
  let userId: string;

  afterAll(async () => {
    await prisma.user.delete({
      where: {
        id: userId,
      },
    });
  });

  it("should create a new user successfully", async () => {
    const userResponse = await request(app).post("/users").send({
      name: "Test Session",
      email: "session@email.com",
      password: "12345678",
    });

    userId = userResponse.body.id;

    const sessionResponse = await request(app).post("/sessions").send({
      email: "session@email.com",
      password: "12345678",
    });

    expect(sessionResponse.status).toBe(200);
    expect(sessionResponse.body.token).toEqual(expect.any(String));
  });
});
