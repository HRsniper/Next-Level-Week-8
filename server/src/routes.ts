import express from "express";
import { prisma } from "./prisma";

export const routes = express.Router();

type Feedback = {
  type: string;
  comment: string;
  screenshot: string;
};

routes.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body as Feedback;

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot
    }
  });

  return res.status(201).json({ data: feedback });
});
