import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

export const prisma = new PrismaClient({});

export interface Context {
  prisma: PrismaClient;
}

export interface ContextParameters {
  req: Request;
  res: Response;
}

export default function createContext(params: ContextParameters): Context {
  return {
    prisma,
  };
}
