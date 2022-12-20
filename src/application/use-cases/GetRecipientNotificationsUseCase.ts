import { Injectable } from '@nestjs/common';
import { INotificationsRepository } from '../repositories/INotificationsRepository';
import { Notification } from '@application/entities/Notification';

interface GetRecipientNotificationsRequest {
    recipientId: string;
}

interface GetRecipientNotificationsResponse {
    notifications: Notification[];
}

@Injectable()
export class GetRecipientNotificationsUseCase {
    constructor(private notificationsRepository: INotificationsRepository) {}

    async execute(
        request: GetRecipientNotificationsRequest,
    ): Promise<GetRecipientNotificationsResponse> {
        const { recipientId } = request;

        const notifications =
            await this.notificationsRepository.findManyByRecipientId(
                recipientId,
            );

        return { notifications };
    }
}
