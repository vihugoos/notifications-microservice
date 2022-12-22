import { NotificationRepositoryInMemory } from '@test/repositories/in-memory/NotificationsRepositoryInMemory';
import { CountRecipientNotifications } from './CountRecipientNotifications';
import { makeNotification } from '@test/factories/notification-factory';

describe('Count recipients notifications', () => {
    it('should be able to count recipient notifications', async () => {
        const notificationsRepository = new NotificationRepositoryInMemory();

        const countRecipientNotifications = new CountRecipientNotifications(
            notificationsRepository,
        );

        await notificationsRepository.create(
            makeNotification({ recipientId: 'recipient-1' }),
        );

        await notificationsRepository.create(
            makeNotification({ recipientId: 'recipient-1' }),
        );

        await notificationsRepository.create(
            makeNotification({ recipientId: 'recipient-3' }),
        );

        const { count } = await countRecipientNotifications.execute(
            'recipient-1',
        );

        expect(count).toEqual(2);
    });
});
