import { EmailNotification } from "../channels/EmailNotification"
import { Notification } from "../models/types"
import { NotificationFactory } from "../NotificationFactory"

export class EmailNotificationFactory extends NotificationFactory {
    createNotification(): Notification {
        return new EmailNotification()
    }
}