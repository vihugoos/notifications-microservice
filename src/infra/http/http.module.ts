import { Module } from '@nestjs/common';
import { SendNotification } from '@application/use-cases/SendNotification';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/Notifications.controller';
import { CancelNotification } from '@application/use-cases/CancelNotification';
import { CountRecipientNotifications } from '@application/use-cases/CountRecipientNotifications';
import { GetRecipientNotifications } from '@application/use-cases/GetRecipientNotifications';
import { ReadNotification } from '@application/use-cases/ReadNotification';
import { UnreadNotification } from '@application/use-cases/UnreadNotification';

@Module({
    imports: [DatabaseModule],
    controllers: [NotificationsController],
    providers: [
        SendNotification,
        CancelNotification,
        CountRecipientNotifications,
        GetRecipientNotifications,
        ReadNotification,
        UnreadNotification,
    ],
})
export class HttpModule {}
