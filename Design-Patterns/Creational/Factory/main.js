import { EmailNotificationFactory } from "./channelsFactory/EmailNotificationFactory";
import { SmsNotificationFactory } from "./channelsFactory/SmsNotificationFactory";
const emailFactory = new EmailNotificationFactory();
emailFactory.notify('Hello from Email');
const smsFactory = new SmsNotificationFactory();
smsFactory.notify('Hello from Sms');
