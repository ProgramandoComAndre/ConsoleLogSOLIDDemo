import { EmailService } from "./EmailService";
import { Output } from "./Output";

type EmailOptions = {
   from: string,
   to: string,
   subject: string,
}

export class EmailOutput implements Output {


    constructor(private service: EmailService, private options: EmailOptions) {}
    async log(message: string): Promise<boolean> {
        return this.service.sendEmail(this.options.to, this.options.subject, message);
    }

}