import { Injectable } from '@nestjs/common';
import { INotificationsRepository } from '../repositories/INotificationsRepository';

interface CountRecipientNotificationsRequest {
    recipientId: string;
}

interface CountRecipientNotificationsResponse {
    count: number;
}

@Injectable()
export class CountRecipientNotificationsUseCase {
    constructor(private notificationsRepository: INotificationsRepository) {}

    async execute(
        request: CountRecipientNotificationsRequest,
    ): Promise<CountRecipientNotificationsResponse> {
        const { recipientId } = request;

        const count = await this.notificationsRepository.countManyByRecipientId(
            recipientId,
        );

        return { count };
    }
}
