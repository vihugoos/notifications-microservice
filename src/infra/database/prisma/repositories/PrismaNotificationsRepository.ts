import { Injectable } from '@nestjs/common';
import { Notification } from '@application/entities/Notification';
import { INotificationsRepository } from '@application/repositories/INotificationsRepository';
import { PrismaService } from '../prisma.service';
import { PrismaNotificationMapper } from '../mappers/PrismaNotificationMapper';

@Injectable()
export class PrismaNotificationsRepository implements INotificationsRepository {
    constructor(private prismaService: PrismaService) {}

    async create(notification: Notification): Promise<void> {
        const raw = PrismaNotificationMapper.toPrisma(notification);

        await this.prismaService.notification.create({
            data: raw,
        });
    }

    async findById(notificationId: string): Promise<Notification | null> {
        throw new Error('Method not implemented.');
    }

    async save(notification: Notification): Promise<void> {
        throw new Error('Method not implemented.');
    }
}
