export interface FeedbackCreateDataInterface {
  type: string;
  comment: string;
  screenshot?: string;
}

export interface FeedbacksRepositoryInterface {
  create: (data: FeedbackCreateDataInterface) => Promise<void>;
}
