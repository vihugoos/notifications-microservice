import { NotificationRepositoryInMemory } from '../../../test/repositories/in-memory/NotificationsRepositoryInMemory';
import { SendNotificationUseCase } from './SendNotificationUseCase';

describe('Send Notification', () => {
    it('Should be able to send a notification', async () => {
        const notificationsRepositoryInMemory =
            new NotificationRepositoryInMemory();

        const sendNotification = new SendNotificationUseCase(
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
