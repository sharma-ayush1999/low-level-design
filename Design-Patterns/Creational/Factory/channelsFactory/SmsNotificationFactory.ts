import { SmsNotification } from "../channels/SmsNotification"
import { Notification } from "../models/types"
import { NotificationFactory } from "../NotificationFactory"

export class SmsNotificationFactory extends NotificationFactory {
    createNotification(): Notification {
        return new SmsNotification()
    }
}