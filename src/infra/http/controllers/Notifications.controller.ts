import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { SendNotificationUseCase } from '@application/use-cases/SendNotificationUseCase';
import { CancelNotificationUseCase } from '@application/use-cases/CancelNotificationUseCase';
import { ReadNotificationUseCase } from '@application/use-cases/ReadNotificationUseCase';
import { UnreadNotificationUseCase } from '@application/use-cases/UnreadNotificationUseCase';
import { CountRecipientNotificationsUseCase } from '@application/use-cases/CountRecipientNotificationsUseCase';
import { GetRecipientNotificationsUseCase } from '@application/use-cases/GetRecipientNotificationsUseCase';

import { CreateNotificationBodyDTO } from '../dtos/CreateNotificationBodyDTO';
import { NotificationViewModel } from '../view-models/NotificationViewModel';

@Controller('notifications')
export class NotificationsController {
    constructor(
        private sendNotificationUseCase: SendNotificationUseCase,
        private cancelNotificationUseCase: CancelNotificationUseCase,
        private readNotificationUseCase: ReadNotificationUseCase,
        private unreadNotificationUseCase: UnreadNotificationUseCase,
        private countRecipientNotificationsUseCase: CountRecipientNotificationsUseCase,
        private getRecipientNotificationsUseCase: GetRecipientNotificationsUseCase,
    ) {}

    @Patch(':id/cancel')
    async cancel(@Param('id') id: string) {
        await this.cancelNotificationUseCase.execute({ notificationId: id });
    }

    @Get('count/from/:recipientId')
    async countFromRecipient(@Param('recipientId') recipientId: string) {
        const { count } = await this.countRecipientNotificationsUseCase.execute(
            {
                recipientId,
            },
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
