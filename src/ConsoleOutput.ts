import { Output } from "./Output";

export class ConsoleOutput implements Output {
    public async log(message: string): Promise<boolean> {
        console.log(message);
        return true
    }
}