import { Module } from '@nestjs/common';
import { SendNotificationUseCase } from '@application/use-cases/SendNotificationUseCase';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/Notifications.controller';
import { CancelNotification } from '@application/use-cases/CancelNotification';
import { CountRecipientNotifications } from '@application/use-cases/CountRecipientNotifications';
import { GetRecipientNotificationsUseCase } from '@application/use-cases/GetRecipientNotificationsUseCase';
import { ReadNotificationUseCase } from '@application/use-cases/ReadNotificationUseCase';
import { UnreadNotificationUseCase } from '@application/use-cases/UnreadNotificationUseCase';

@Module({
    imports: [DatabaseModule],
    controllers: [NotificationsController],
    providers: [
        SendNotificationUseCase,
        CancelNotification,
        CountRecipientNotifications,
        GetRecipientNotificationsUseCase,
        ReadNotificationUseCase,
        UnreadNotificationUseCase,
    ],
})
export class HttpModule {}
