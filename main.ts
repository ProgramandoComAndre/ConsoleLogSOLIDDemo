import { ConsoleOutput } from "./src/ConsoleOutput";
import { EmailOutput } from "./src/EmailOutput";
import { EmailService } from "./src/EmailService";
import { FileOutput } from "./src/FileOutput";
import { MyEnvironment } from "./src/MyEnvironment";
import { NodeMailerEmailService } from "./src/NodeMailerEmailService";
import { Output } from "./src/Output";

async function main() {
    const env = new MyEnvironment();
    env.load('.env');
    const emailService: EmailService = new NodeMailerEmailService({
        host: env.getHost(),
        port: env.getPort(),
        secure: env.getSecure(),
        auth: {
            user: env.getEmail(),
            pass: env.getPassword()
        }

    });
    const emailOutput:Output = new EmailOutput(emailService, {
        from: env.getEmail(),
        to: env.getEmail(),
        subject: 'Hello World!'
    });

    const consoleOutput:Output = new ConsoleOutput();
    const fileOutput:Output = new FileOutput('teste.txt');
    const outputs:Output[] = [emailOutput, consoleOutput, fileOutput];

    return Promise.all(outputs.map(output => output.log('Hello World!')));
}

main().then(() => console.log('Done'));