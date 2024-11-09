export interface Output {
    log(message: string): Promise<boolean>;
}