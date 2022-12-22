import { NotificationRepositoryInMemory } from '@test/repositories/in-memory/NotificationsRepositoryInMemory';
import { NotificationNotFound } from './errors/NotificationNotFound';
import { makeNotification } from '@test/factories/notification-factory';
import { UnreadNotification } from './UnreadNotification';

describe('Unread Notification', () => {
    it('should be to unread a notification', async () => {
        const notificationsRepositoryInMemory =
            new NotificationRepositoryInMemory();

        const unreadNotification = new UnreadNotification(
            notificationsRepositoryInMemory,
        );

        const notification = makeNotification({
            readAt: new Date(),
        });

        await notificationsRepositoryInMemory.create(notification);

        await unreadNotification.execute(notification.id);

        expect(
            notificationsRepositoryInMemory.notifications[0].readAt,
        ).toBeNull();
    });

    it('should not be able to unread a non existing notification', async () => {
        const notificationsRepositoryInMemory =
            new NotificationRepositoryInMemory();

        const unreadNotification = new UnreadNotification(
            notificationsRepositoryInMemory,
        );

        expect(() => {
            return unreadNotification.execute('fake-notification-d');
        }).rejects.toThrow(NotificationNotFound);
    });
});
