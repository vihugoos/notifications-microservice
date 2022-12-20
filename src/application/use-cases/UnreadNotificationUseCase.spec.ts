import { NotificationRepositoryInMemory } from '@test/repositories/in-memory/NotificationsRepositoryInMemory';
import { NotificationNotFound } from './errors/NotificationNotFound';
import { makeNotification } from '@test/factories/notification-factory';
import { UnreadNotificationUseCase } from './UnreadNotificationUseCase';

describe('Unread Notification', () => {
    it('Should be to unread a notification', async () => {
        const notificationsRepositoryInMemory =
            new NotificationRepositoryInMemory();

        const unreadNotificationUseCase = new UnreadNotificationUseCase(
            notificationsRepositoryInMemory,
        );

        const notification = makeNotification({
            readAt: new Date(),
        });

        await notificationsRepositoryInMemory.create(notification);

        await unreadNotificationUseCase.execute({
            notificationId: notification.id,
        });

        expect(
            notificationsRepositoryInMemory.notifications[0].readAt,
        ).toBeNull();
    });

    it('Should not be able to unread a non existing notification', async () => {
        const notificationsRepositoryInMemory =
            new NotificationRepositoryInMemory();

        const unreadNotificationUseCase = new UnreadNotificationUseCase(
            notificationsRepositoryInMemory,
        );

        expect(() => {
            return unreadNotificationUseCase.execute({
                notificationId: 'fake-notification-d',
            });
        }).rejects.toThrow(NotificationNotFound);
    });
});
