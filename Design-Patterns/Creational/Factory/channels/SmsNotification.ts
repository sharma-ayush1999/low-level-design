import { Notification } from "../models/types";

export class SmsNotification implements Notification {
    send(message: string): void {
        console.log(`SMS notification: ${message}`)
    }
}