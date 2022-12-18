import { Injectable } from '@nestjs/common';
import { Content } from '../entities/Content';
import { Notification } from '../entities/Notification';
import { INotificationsRepository } from '../repositories/INotificationsRepository';

interface SendNotificationRequest {
    recipientId: string;
    content: string;
    category: string;
}

interface SendNotificationResponse {
    notification: Notification;
}

@Injectable()
export class SendNotificationUseCase {
    constructor(private notificationsRepository: INotificationsRepository) {}

    async execute(
        request: SendNotificationRequest,
    ): Promise<SendNotificationResponse> {
        const { recipientId, content, category } = request;

        const notification = new Notification({
            recipientId,
            content: new Content(content),
            category,
        });

        await this.notificationsRepository.create(notification);

        return { notification };
    }
}