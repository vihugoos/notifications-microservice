import { Injectable } from '@nestjs/common';
import { INotificationsRepository } from '../repositories/INotificationsRepository';
import { NotificationNotFound } from './errors/NotificationNotFound';

interface CancelNotificationRequest {
    notificationId: string;
}

type CancelNotificationResponse = void;

@Injectable()
export class CancelNotificationUseCase {
    constructor(private notificationsRepository: INotificationsRepository) {}

    async execute(
        request: CancelNotificationRequest,
    ): Promise<CancelNotificationResponse> {
        const { notificationId } = request;

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
