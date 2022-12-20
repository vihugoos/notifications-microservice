import { Injectable } from '@nestjs/common';
import { INotificationsRepository } from '../repositories/INotificationsRepository';
import { NotificationNotFound } from './errors/NotificationNotFound';

interface ReadNotificationRequest {
    notificationId: string;
}

type ReadNotificationResponse = void;

@Injectable()
export class ReadNotificationUseCase {
    constructor(private notificationsRepository: INotificationsRepository) {}

    async execute(
        request: ReadNotificationRequest,
    ): Promise<ReadNotificationResponse> {
        const { notificationId } = request;

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
