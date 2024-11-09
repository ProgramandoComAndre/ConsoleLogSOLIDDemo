import dotenv from 'dotenv';

type EnvDTO = {
    SMTP_HOST: string
    SMTP_PORT: number
    SECURE: boolean
    SMTP_EMAIL: string
    SMTP_PASSWORD: string
}

export class MyEnvironment {
   private SMTP_HOST:string = ""
   private SMTP_PORT:number = 0
   private SECURE:boolean = false
   private SMTP_EMAIL: string = ""
   private SMTP_PASSWORD: string = ""

   constructor(private env?: EnvDTO) {
    if(env) {
        this.SMTP_HOST = env.SMTP_HOST
        this.SMTP_PORT = env.SMTP_PORT
        this.SECURE = env.SECURE
        this.SMTP_EMAIL = env.SMTP_EMAIL
        this.SMTP_PASSWORD = env.SMTP_PASSWORD
    }
   }
    getHost():string {
        return this.SMTP_HOST
    }

    getPort():number {
        return this.SMTP_PORT
    }

    getSecure():boolean {
        return this.SECURE
    }

    getEmail():string {
        return this.SMTP_EMAIL
    }

    getPassword():string {
        return this.SMTP_PASSWORD
    }

    load(file: string) {
        dotenv.config({ path: file });
        if(process.env.SMTP_HOST) {
            this.SMTP_HOST = process.env.SMTP_HOST
        }
        else {
            throw new Error('SMTP_HOST is not defined')
        }
        if(process.env.SMTP_PORT) {
            this.SMTP_PORT = Number(process.env.SMTP_PORT)
        }
        else {
            throw new Error('SMTP_PORT is not defined')
        }
        if(process.env.SECURE) {
            this.SECURE = Boolean(process.env.SECURE)
        }

        else {
            throw new Error('SECURE is not defined')
        }

        if(process.env.SMTP_EMAIL) {
            this.SMTP_EMAIL = process.env.SMTP_EMAIL
        }
        else {
            throw new Error('SMTP_EMAIL is not defined')
        }

        if(process.env.SMTP_PASSWORD) {
            this.SMTP_PASSWORD = process.env.SMTP_PASSWORD
        }
        else {
            throw new Error('SMTP_PASSWORD is not defined')
        }

    }
}