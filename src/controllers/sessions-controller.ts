import { Request, Response } from "express";
import { prisma } from "../database/prisma.js";
import { z } from "zod";
import { AppError } from "../utils/AppError.js";
import { compare } from "bcrypt";
import { authConfig } from "../config/auth.js";
import jwt from "jsonwebtoken";

class SessionsController {
  async create(request: Request, response: Response) {
    const bodySchema = z.object({
      email: z.email(),
      password: z.string().min(6),
    });

    const { email, password } = bodySchema.parse(request.body);

    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      throw new AppError("invalid email or password", 401);
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("invalid email or password", 401);
    }

    const { secret } = authConfig.jwt;

    const token = jwt.sign({ role: user.role ?? "customer" }, secret, {
      subject: user.id,
      expiresIn: "1d",
    });

    const { password: hashedPassword, ...userWithoutPassword } = user;

    return response.json({ ...userWithoutPassword, token });
  }
}

export { SessionsController };
