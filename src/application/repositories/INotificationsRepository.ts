import { Notification } from '../entities/Notification';

export abstract class INotificationsRepository {
    abstract create(notification: Notification): Promise<void>;
}
