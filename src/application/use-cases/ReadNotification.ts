import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/NotificationsRepository';
import { NotificationNotFound } from './errors/NotificationNotFound';

@Injectable()
export class ReadNotification {
    constructor(private notificationsRepository: NotificationsRepository) {}

    async execute(notificationId: string): Promise<void> {
        const notification = await this.notificationsRepository.findById(
            notificationId,
        );

        if (!notification) {
            throw new NotificationNotFound();
        }

        notification.read();

        await this.notificationsRepository.save(notification);
    }
}
