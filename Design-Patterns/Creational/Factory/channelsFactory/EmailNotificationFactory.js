import { EmailNotification } from "../channels/EmailNotification";
import { NotificationFactory } from "../NotificationFactory";
export class EmailNotificationFactory extends NotificationFactory {
    createNotification() {
        return new EmailNotification();
    }
}
