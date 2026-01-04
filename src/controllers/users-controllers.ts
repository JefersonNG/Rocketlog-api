import { Request, Response } from "express";
import { z } from "zod";
import { hash } from "bcrypt";
import { prisma } from "../database/prisma.js";
import { AppError } from "../utils/AppError.js";

class UserController {
  async create(request: Request, response: Response) {
    const bodySchema = z.object({
      name: z.string().trim().min(3),
      email: z.email(),
      password: z.string().trim().min(6),
    });

    const { name, email, password } = bodySchema.parse(request.body);

    const userWithSameEmail = await prisma.user.findFirst({
      where: { email },
    });

    if (userWithSameEmail) {
      throw new AppError("Email ja existe");
    }

    const hashedPassword = await hash(password, 8);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    const { password: _, ...userWithoutPassword } = user;

    return response.status(201).json(userWithoutPassword);
  }
}

export { UserController };
