import { NotificationRepositoryInMemory } from '@test/repositories/in-memory/NotificationsRepositoryInMemory';
import { CountRecipientNotificationsUseCase } from './CountRecipientNotificationsUseCase';
import { makeNotification } from '@test/factories/notification-factory';

describe('Count recipients notifications', () => {
    it('Should be able to count recipient notifications', async () => {
        const notificationsRepositoryInMemory =
            new NotificationRepositoryInMemory();

        const countRecipientNotificationsUseCase =
            new CountRecipientNotificationsUseCase(
                notificationsRepositoryInMemory,
            );

        await notificationsRepositoryInMemory.create(
            makeNotification({ recipientId: 'recipient-1' }),
        );

        await notificationsRepositoryInMemory.create(
            makeNotification({ recipientId: 'recipient-1' }),
        );

        await notificationsRepositoryInMemory.create(
            makeNotification({ recipientId: 'recipient-3' }),
        );

        const { count } = await countRecipientNotificationsUseCase.execute({
            recipientId: 'recipient-1',
        });

        expect(count).toEqual(2);
    });
});
