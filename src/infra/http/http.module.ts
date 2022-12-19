import { Module } from '@nestjs/common';
import { SendNotificationUseCase } from '@application/use-cases/SendNotificationUseCase';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/Notifications.controller';

@Module({
    imports: [DatabaseModule],
    controllers: [NotificationsController],
    providers: [SendNotificationUseCase],
})
export class HttpModule {}
