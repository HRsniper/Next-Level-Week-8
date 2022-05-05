import { prisma } from "../../prisma";
import { FeedbackCreateDataInterface, FeedbacksRepositoryInterface } from "../feedbacks-repository-interface";

export class PrismaFeedbacksRepository implements FeedbacksRepositoryInterface {
  async create({ type, comment, screenshot }: FeedbackCreateDataInterface) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot
      }
    });
  }
}
