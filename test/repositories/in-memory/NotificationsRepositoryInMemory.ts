import { Notification } from '../../../src/application/entities/Notification';
import { INotificationsRepository } from '../../../src/application/repositories/INotificationsRepository';

export class NotificationRepositoryInMemory
    implements INotificationsRepository
{
    public notifications: Notification[] = [];

    async create(notification: Notification) {
        this.notifications.push(notification);
    }
}
