import "dotenv/config";
import nodemailer from "nodemailer";
import { MailAdapterInterface, SendMailDataInterface } from "../mail-adapter-interface";

const transport = nodemailer.createTransport({
  host: process.env.NODEMAILER_HOST,
  port: Number(process.env.NODEMAILER_PORT),
  auth: {
    user: process.env.NODEMAILER_AUTH_USER,
    pass: process.env.NODEMAILER_AUTH_PASS
  }
});

export class NodemailerMailAdapter implements MailAdapterInterface {
  async sendMail({ subject, body }: SendMailDataInterface): Promise<void> {
    // const info =
    await transport.sendMail({
      from: "User001 <user001@email.com>",
      to: "Equipe FeedWidget <feedwidget@support.com>",
      subject,
      html: body
    });
    // console.log("Message sent: ", info.messageId);
  }
}
