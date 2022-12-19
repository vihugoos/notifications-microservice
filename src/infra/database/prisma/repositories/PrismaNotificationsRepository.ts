import { Injectable } from '@nestjs/common';
import { Notification } from '@application/entities/Notification';
import { INotificationsRepository } from '@application/repositories/INotificationsRepository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaNotificationsRepository implements INotificationsRepository {
    constructor(private prismaService: PrismaService) {}

    async create(notification: Notification): Promise<void> {
        await this.prismaService.notification.create({
            data: {
                id: notification.id,
                recipientId: notification.recipientId,
                content: notification.content.value,
                category: notification.category,
                readAt: notification.readAt,
                createdAt: notification.createAt,
            },
        });
    }
}
