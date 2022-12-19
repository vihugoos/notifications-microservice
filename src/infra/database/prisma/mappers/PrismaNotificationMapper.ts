import { Notification } from '@application/entities/Notification';

export class PrismaNotificationMapper {
    static toPrisma(notification: Notification) {
        return {
            id: notification.id,
            recipientId: notification.recipientId,
            content: notification.content.value,
            category: notification.category,
            readAt: notification.readAt,
            createdAt: notification.createAt,
        };
    }
}
