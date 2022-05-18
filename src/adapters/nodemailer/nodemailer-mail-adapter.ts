import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "2e0646de5c1907",
      pass: "2a8fa8a277adf9"
    }
  });


export class NodemailerMailAdapter implements MailAdapter {

    async sendMail({subject, body}: SendMailData) {
        
        await transport.sendMail({
        from: 'Equipe feedget <oi@feedgat.com>',
        to: 'Lucas Amaral <analista.sistemas.lucas@gmail.com>',
        subject: subject,
        html: body
    })
    }
}