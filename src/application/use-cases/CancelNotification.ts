import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/NotificationsRepository';
import { NotificationNotFound } from './errors/NotificationNotFound';

@Injectable()
export class CancelNotification {
    constructor(private notificationsRepository: NotificationsRepository) {}

    async execute(notificationId: string): Promise<void> {
        const notification = await this.notificationsRepository.findById(
            notificationId,
        );

        if (!notification) {
            throw new NotificationNotFound();
        }

        notification.cancel();

        await this.notificationsRepository.save(notification);
    }
}
