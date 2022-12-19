import { Notification } from '@application/entities/Notification';
import { INotificationsRepository } from '@application/repositories/INotificationsRepository';

export class NotificationRepositoryInMemory
    implements INotificationsRepository
{
    public notifications: Notification[] = [];

    async create(notification: Notification) {
        this.notifications.push(notification);
    }
}
