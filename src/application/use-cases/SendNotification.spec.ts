import { NotificationRepositoryInMemory } from '@test/repositories/in-memory/NotificationsRepositoryInMemory';
import { SendNotification } from './SendNotification';

describe('Send Notification', () => {
    it('should be able to send a notification', async () => {
        const notificationsRepositoryInMemory =
            new NotificationRepositoryInMemory();

        const sendNotification = new SendNotification(
            notificationsRepositoryInMemory,
        );

        const { notification } = await sendNotification.execute({
            recipientId: 'example-recipient-id',
            content: 'Hello, world!',
            category: 'social',
        });

        expect(notificationsRepositoryInMemory.notifications).toHaveLength(1);
        expect(notificationsRepositoryInMemory.notifications[0]).toEqual(
            notification,
        );
    });
});
