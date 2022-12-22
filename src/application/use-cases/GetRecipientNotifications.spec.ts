import { NotificationRepositoryInMemory } from '@test/repositories/in-memory/NotificationsRepositoryInMemory';
import { makeNotification } from '@test/factories/notification-factory';
import { GetRecipientNotifications } from './GetRecipientNotifications';

describe('Get recipients notifications', () => {
    it('should be able to get recipient notifications', async () => {
        const notificationsRepositoryInMemory =
            new NotificationRepositoryInMemory();

        const getRecipientNotifications = new GetRecipientNotifications(
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

        const { notifications } = await getRecipientNotifications.execute(
            'recipient-1',
        );

        expect(notifications).toHaveLength(2);
        expect(notifications).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ recipientId: 'recipient-1' }),
                expect.objectContaining({ recipientId: 'recipient-1' }),
            ]),
        );
    });
});
