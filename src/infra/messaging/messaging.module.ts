import { Module } from '@nestjs/common';
import { KafkaConsumerService } from './kafka/kafka-consumer.service';
import { NotificationsController } from './kafka/controllers/notifications.controller';
import { SendNotification } from '@application/use-cases/SendNotification';
import { DatabaseModule } from '@infra/database/database.module';

@Module({
    imports: [DatabaseModule],
    providers: [KafkaConsumerService, SendNotification],
    controllers: [NotificationsController],
})
export class MessagingModule {}
