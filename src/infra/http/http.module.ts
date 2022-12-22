import { Module } from '@nestjs/common';
import { SendNotification } from '@application/use-cases/SendNotification';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/Notifications.controller';
import { CancelNotificationUseCase } from '@application/use-cases/CancelNotificationUseCase';
import { CountRecipientNotificationsUseCase } from '@application/use-cases/CountRecipientNotificationsUseCase';
import { GetRecipientNotificationsUseCase } from '@application/use-cases/GetRecipientNotificationsUseCase';
import { ReadNotification } from '@application/use-cases/ReadNotification';
import { UnreadNotification } from '@application/use-cases/UnreadNotification';

@Module({
    imports: [DatabaseModule],
    controllers: [NotificationsController],
    providers: [
        SendNotification,
        CancelNotificationUseCase,
        CountRecipientNotificationsUseCase,
        GetRecipientNotificationsUseCase,
        ReadNotification,
        UnreadNotification,
    ],
})
export class HttpModule {}
