import { EmailService } from "./EmailService";
import nodemailer from "nodemailer"
type NodeMailerConfig = {
    host: string
    port: number
    secure: boolean
    auth: {user: string, pass: string},
} 
export class NodeMailerEmailService implements EmailService {
    private nodemailerTransporter: nodemailer.Transporter
    constructor(private config: NodeMailerConfig) {
        this.nodemailerTransporter = nodemailer.createTransport(config)
    }
    async sendEmail(to: string, subject: string, body: string): Promise<boolean> {
        const result = await this.nodemailerTransporter.sendMail({
            from: this.config.auth.user,
            to,
            subject,
            text: body
        })
        if(!result.messageId) {
            return false
        }
        
        return true
    }
}