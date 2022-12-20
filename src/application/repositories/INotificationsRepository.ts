import { Notification } from '../entities/Notification';

export abstract class INotificationsRepository {
    abstract create(notification: Notification): Promise<void>;
    abstract save(notification: Notification): Promise<void>;
    abstract findById(notificationId: string): Promise<Notification | null>;
    abstract findManyByRecipientId(
        recipientId: string,
    ): Promise<Notification[]>;
    abstract countManyByRecipientId(recipientId: string): Promise<number>;
}
