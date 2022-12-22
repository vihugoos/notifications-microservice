import { NotificationRepositoryInMemory } from '@test/repositories/in-memory/NotificationsRepositoryInMemory';
import { SendNotification } from './SendNotification';

describe('Send Notification', () => {
    it('should be able to send a notification', async () => {
        const notificationsRepository = new NotificationRepositoryInMemory();

        const sendNotification = new SendNotification(notificationsRepository);

        const { notification } = await sendNotification.execute({
            recipientId: 'example-recipient-id',
            content: 'Hello, world!',
            category: 'social',
        });

        expect(notificationsRepository.notifications).toHaveLength(1);
        expect(notificationsRepository.notifications[0]).toEqual(notification);
    });
});
