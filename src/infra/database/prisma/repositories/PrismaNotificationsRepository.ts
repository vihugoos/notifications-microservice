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
}
