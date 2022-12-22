import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/NotificationsRepository';
import { Notification } from '@application/entities/Notification';

@Injectable()
export class GetRecipientNotifications {
    constructor(private notificationsRepository: NotificationsRepository) {}

    async execute(
        recipientId: string,
    ): Promise<{ notifications: Notification[] }> {
        const notifications =
            await this.notificationsRepository.findManyByRecipientId(
                recipientId,
            );

        return { notifications };
    }
}
