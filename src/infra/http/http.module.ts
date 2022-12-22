import { Module } from '@nestjs/common';
import { SendNotificationUseCase } from '@application/use-cases/SendNotificationUseCase';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/Notifications.controller';
import { CancelNotificationUseCase } from '@application/use-cases/CancelNotificationUseCase';
import { CountRecipientNotificationsUseCase } from '@application/use-cases/CountRecipientNotificationsUseCase';
import { GetRecipientNotificationsUseCase } from '@application/use-cases/GetRecipientNotificationsUseCase';
import { ReadNotification } from '@application/use-cases/ReadNotification';
import { UnreadNotificationUseCase } from '@application/use-cases/UnreadNotificationUseCase';

@Module({
    imports: [DatabaseModule],
    controllers: [NotificationsController],
    providers: [
        SendNotificationUseCase,
        CancelNotificationUseCase,
        CountRecipientNotificationsUseCase,
        GetRecipientNotificationsUseCase,
        ReadNotification,
        UnreadNotificationUseCase,
    ],
})
export class HttpModule {}
