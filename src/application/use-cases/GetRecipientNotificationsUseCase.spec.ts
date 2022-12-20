import { NotificationRepositoryInMemory } from '@test/repositories/in-memory/NotificationsRepositoryInMemory';
import { makeNotification } from '@test/factories/notification-factory';
import { GetRecipientNotificationsUseCase } from './GetRecipientNotificationsUseCase';

describe('Get recipients notifications', () => {
    it('Should be able to get recipient notifications', async () => {
        const notificationsRepositoryInMemory =
            new NotificationRepositoryInMemory();

        const getRecipientNotificationsUseCase =
            new GetRecipientNotificationsUseCase(
                notificationsRepositoryInMemory,
            );

        await notificationsRepositoryInMemory.create(
            makeNotification({ recipientId: 'recipient-1' }),
        );

        await notificationsRepositoryInMemory.create(
            makeNotification({ recipientId: 'recipient-1' }),
        );

        await notificationsRepositoryInMemory.create(
            makeNotification({ recipientId: 'recipient-2' }),
        );

        const { notifications } =
            await getRecipientNotificationsUseCase.execute({
                recipientId: 'recipient-1',
            });

        expect(notifications).toHaveLength(2);
        expect(notifications).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ recipientId: 'recipient-1' }),
                expect.objectContaining({ recipientId: 'recipient-1' }),
            ]),
        );
    });
});
