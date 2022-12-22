import { NotificationRepositoryInMemory } from '@test/repositories/in-memory/NotificationsRepositoryInMemory';
import { NotificationNotFound } from './errors/NotificationNotFound';
import { makeNotification } from '@test/factories/notification-factory';
import { UnreadNotification } from './UnreadNotification';

describe('Unread Notification', () => {
    it('should be to unread a notification', async () => {
        const notificationsRepository = new NotificationRepositoryInMemory();

        const unreadNotification = new UnreadNotification(
            notificationsRepository,
        );

        const notification = makeNotification({
            readAt: new Date(),
        });

        await notificationsRepository.create(notification);

        await unreadNotification.execute(notification.id);

        expect(notificationsRepository.notifications[0].readAt).toBeNull();
    });

    it('should not be able to unread a non existing notification', async () => {
        const notificationsRepository = new NotificationRepositoryInMemory();

        const unreadNotification = new UnreadNotification(
            notificationsRepository,
        );

        expect(() => {
            return unreadNotification.execute('fake-notification-d');
        }).rejects.toThrow(NotificationNotFound);
    });
});
