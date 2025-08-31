import { SmsNotification } from "../channels/SmsNotification";
import { NotificationFactory } from "../NotificationFactory";
export class SmsNotificationFactory extends NotificationFactory {
    createNotification() {
        return new SmsNotification();
    }
}
