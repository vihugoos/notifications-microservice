import { Body, Controller, Post } from '@nestjs/common';
import { SendNotificationUseCase } from '@application/use-cases/SendNotificationUseCase';
import { CreateNotificationBodyDTO } from '../dtos/CreateNotificationBodyDTO';

@Controller('notifications')
export class NotificationsController {
    constructor(private sendNotificationUseCase: SendNotificationUseCase) {}

    @Post()
    async create(@Body() body: CreateNotificationBodyDTO) {
        const { recipientId, content, category } = body;

        const { notification } = await this.sendNotificationUseCase.execute({
            recipientId,
            content,
            category,
        });

        return { notification };
    }
}
