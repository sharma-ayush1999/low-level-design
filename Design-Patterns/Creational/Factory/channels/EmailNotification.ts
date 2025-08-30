import { Notification } from "../models/types";

export class EmailNotification implements Notification {
    send(message: string): void {
        console.log(`Email notification: ${message}`)
    }
}