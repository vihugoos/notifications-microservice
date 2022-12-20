import { Injectable } from '@nestjs/common';
import { INotificationsRepository } from '../repositories/INotificationsRepository';
import { NotificationNotFound } from './errors/NotificationNotFound';

interface UnreadNotificationRequest {
    notificationId: string;
}

type UnreadNotificationResponse = void;

@Injectable()
export class UnreadNotificationUseCase {
    constructor(private notificationsRepository: INotificationsRepository) {}

    async execute(
        request: UnreadNotificationRequest,
    ): Promise<UnreadNotificationResponse> {
        const { notificationId } = request;

        const notification = await this.notificationsRepository.findById(
            notificationId,
        );

        if (!notification) {
            throw new NotificationNotFound();
        }

        notification.unread();

        await this.notificationsRepository.save(notification);
    }
}
