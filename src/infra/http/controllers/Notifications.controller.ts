import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { SendNotificationUseCase } from '@application/use-cases/SendNotificationUseCase';
import { CancelNotification } from '@application/use-cases/CancelNotification';
import { ReadNotificationUseCase } from '@application/use-cases/ReadNotificationUseCase';
import { UnreadNotificationUseCase } from '@application/use-cases/UnreadNotificationUseCase';
import { CountRecipientNotifications } from '@application/use-cases/CountRecipientNotifications';
import { GetRecipientNotificationsUseCase } from '@application/use-cases/GetRecipientNotificationsUseCase';

import { CreateNotificationBodyDTO } from '../dtos/CreateNotificationBodyDTO';
import { NotificationViewModel } from '../view-models/NotificationViewModel';

@Controller('notifications')
export class NotificationsController {
    constructor(
        private sendNotificationUseCase: SendNotificationUseCase,
        private cancelNotification: CancelNotification,
        private readNotificationUseCase: ReadNotificationUseCase,
        private unreadNotificationUseCase: UnreadNotificationUseCase,
        private countRecipientNotifications: CountRecipientNotifications,
        private getRecipientNotificationsUseCase: GetRecipientNotificationsUseCase,
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
        const { notifications } =
            await this.getRecipientNotificationsUseCase.execute({
                recipientId,
            });

        return {
            notifications: notifications.map(NotificationViewModel.toHTTP),
        };
    }

    @Patch(':id/read')
    async read(@Param('id') id: string) {
        await this.readNotificationUseCase.execute({ notificationId: id });
    }

    @Patch(':id/unread')
    async unread(@Param('id') id: string) {
        await this.unreadNotificationUseCase.execute({ notificationId: id });
    }

    @Post()
    async create(@Body() body: CreateNotificationBodyDTO) {
        const { recipientId, content, category } = body;

        const { notification } = await this.sendNotificationUseCase.execute({
            recipientId,
            content,
            category,
        });

        return { notification: NotificationViewModel.toHTTP(notification) };
    }
}
