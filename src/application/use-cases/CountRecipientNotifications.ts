import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/NotificationsRepository';

@Injectable()
export class CountRecipientNotifications {
    constructor(private notificationsRepository: NotificationsRepository) {}

    async execute(recipientId: string): Promise<{ count: number }> {
        const count = await this.notificationsRepository.countManyByRecipientId(
            recipientId,
        );

        return { count };
    }
}
