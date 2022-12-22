import { SendNotificationUseCase } from '@application/use-cases/SendNotificationUseCase';
import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

interface SendNotificationPayload {
    recipientId: string;
    content: string;
    category: string;
}

@Controller()
export class NotificationsController {
    constructor(private sendNotificationUseCase: SendNotificationUseCase) {}

    @EventPattern('notifications.send-notification')
    async handleSendNotification(
        @Payload() { recipientId, content, category }: SendNotificationPayload,
    ) {
        await this.sendNotificationUseCase.execute({
            recipientId,
            content,
            category,
        });
    }
}
