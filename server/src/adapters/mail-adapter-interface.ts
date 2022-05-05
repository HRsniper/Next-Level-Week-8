export interface SendMailDataInterface {
  subject: string;
  body: string;
}

export interface MailAdapterInterface {
  sendMail: (data: SendMailDataInterface) => Promise<void>;
}
