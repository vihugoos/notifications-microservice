import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { SendNotification } from '@application/use-cases/SendNotification';
import { CancelNotification } from '@application/use-cases/CancelNotification';
import { ReadNotification } from '@application/use-cases/ReadNotification';
import { UnreadNotification } from '@application/use-cases/UnreadNotification';
import { CountRecipientNotifications } from '@application/use-cases/CountRecipientNotifications';
import { GetRecipientNotifications } from '@application/use-cases/GetRecipientNotifications';

import { CreateNotificationBodyDTO } from '../dtos/CreateNotificationBodyDTO';
import { NotificationViewModel } from '../view-models/NotificationViewModel';

@Controller('notifications')
export class NotificationsController {
    constructor(
        private sendNotification: SendNotification,
        private cancelNotification: CancelNotification,
        private readNotification: ReadNotification,
        private unreadNotification: UnreadNotification,
        private countRecipientNotifications: CountRecipientNotifications,
        private getRecipientNotifications: GetRecipientNotifications,
    ) {}

    @Patch(':id/cancel')
    async cancel(@Param('id') id: string) {
        await this.cancelNotification.execute(id);
    }

    @Get('count/from/:recipientId')
    async countFromRecipient(@Param('recipientId') recipientId: string) {
        const { count } = await this.countRecipientNotifications.execute(
            recipientId,
        );

        return count;
    }

    @Get('from/:recipientId')
    async getFromRecipient(@Param('recipientId') recipientId: string) {
        const { notifications } = await this.getRecipientNotifications.execute(
            recipientId,
        );

        return {
            notifications: notifications.map(NotificationViewModel.toHTTP),
        };
    }

    @Patch(':id/read')
    async read(@Param('id') id: string) {
        await this.readNotification.execute(id);
    }

    @Patch(':id/unread')
    async unread(@Param('id') id: string) {
        await this.unreadNotification.execute(id);
    }

    @Post()
    async create(@Body() body: CreateNotificationBodyDTO) {
        const { recipientId, content, category } = body;

        const { notification } = await this.sendNotification.execute({
            recipientId,
            content,
            category,
        });

        return { notification: NotificationViewModel.toHTTP(notification) };
    }
}
