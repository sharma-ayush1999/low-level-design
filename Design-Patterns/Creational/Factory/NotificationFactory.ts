import { Notification } from "./models/types";

export abstract class NotificationFactory {
    abstract createNotification(): Notification;

    public notify(message: string) {
        const notification = this.createNotification();
        notification.send(message);
    }

}