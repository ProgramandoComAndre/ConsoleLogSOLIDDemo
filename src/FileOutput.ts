import { Output } from "./Output";
import { writeFileSync } from "fs";
export class FileOutput implements Output {
    constructor(private filePath: string) {

    }
    async log(message: string): Promise<boolean> {
       try {
        writeFileSync(this.filePath, message);
        return true;
       }
       catch (error) {
        console.log(error);
        return false;

       }
       
    }
}