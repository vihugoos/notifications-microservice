import { Notification } from '../entities/Notification';

export abstract class INotificationsRepository {
    abstract create(notification: Notification): Promise<void>;
    abstract findById(notificationId: string): Promise<Notification | null>;
    abstract save(notification: Notification): Promise<void>;
}
