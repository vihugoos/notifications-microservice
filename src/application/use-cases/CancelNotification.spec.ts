import { NotificationRepositoryInMemory } from '@test/repositories/in-memory/NotificationsRepositoryInMemory';
import { CancelNotification } from './CancelNotification';
import { NotificationNotFound } from './errors/NotificationNotFound';
import { makeNotification } from '@test/factories/notification-factory';

describe('Cancel Notification', () => {
    it('should be able to cancel a notification', async () => {
        const notificationsRepository = new NotificationRepositoryInMemory();

        const cancelNotification = new CancelNotification(
            notificationsRepository,
        );

        const notification = makeNotification();

        await notificationsRepository.create(notification);

        await cancelNotification.execute(notification.id);

        expect(notificationsRepository.notifications[0].canceledAt).toEqual(
            expect.any(Date),
        );
    });

    it('should not be able to cancel a non existing notification', async () => {
        const notificationsRepository = new NotificationRepositoryInMemory();

        const cancelNotification = new CancelNotification(
            notificationsRepository,
        );

        expect(() => {
            return cancelNotification.execute('fake-notification-id');
        }).rejects.toThrow(NotificationNotFound);
    });
});
