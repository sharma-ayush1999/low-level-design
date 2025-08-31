export class NotificationFactory {
    notify(message) {
        const notification = this.createNotification();
        notification.send(message);
    }
}
