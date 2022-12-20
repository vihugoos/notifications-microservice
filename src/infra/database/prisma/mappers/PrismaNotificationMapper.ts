import { Notification as RawNotification } from '@prisma/client';
import { Notification } from '@application/entities/Notification';
import { Content } from '@application/entities/Content';

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

    static toDomain(raw: RawNotification): Notification {
        return new Notification(
            {
                recipientId: raw.recipientId,
                content: new Content(raw.content),
                category: raw.category,
                readAt: raw.readAt,
                canceledAt: raw.canceledAt,
                createdAt: raw.createdAt,
            },
            raw.id,
        );
    }
}
