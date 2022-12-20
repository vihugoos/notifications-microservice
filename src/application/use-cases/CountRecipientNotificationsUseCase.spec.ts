import { Content } from '@application/entities/Content';
import { Notification } from '@application/entities/Notification';
import { NotificationRepositoryInMemory } from '@test/repositories/in-memory/NotificationsRepositoryInMemory';
import { CountRecipientNotificationsUseCase } from './CountRecipientNotificationsUseCase';

describe('Count recipients notifications', () => {
    it('Should be able to count recipient notifications', async () => {
        const notificationsRepositoryInMemory =
            new NotificationRepositoryInMemory();

        const countRecipientNotificationsUseCase =
            new CountRecipientNotificationsUseCase(
                notificationsRepositoryInMemory,
            );

        await notificationsRepositoryInMemory.create(
            new Notification({
                recipientId: 'recipient-1',
                content: new Content('New friend solicitation!'),
                category: 'Social',
            }),
        );

        await notificationsRepositoryInMemory.create(
            new Notification({
                recipientId: 'recipient-1',
                content: new Content('New friend solicitation!'),
                category: 'Social',
            }),
        );

        await notificationsRepositoryInMemory.create(
            new Notification({
                recipientId: 'recipient-2',
                content: new Content('New friend solicitation!'),
                category: 'Social',
            }),
        );

        const { count } = await countRecipientNotificationsUseCase.execute({
            recipientId: 'recipient-1',
        });

        expect(count).toEqual(2);
    });
});
