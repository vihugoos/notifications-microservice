import { NotificationRepositoryInMemory } from '@test/repositories/in-memory/NotificationsRepositoryInMemory';
import { CancelNotificationUseCase } from './CancelNotificationUseCase';
import { NotificationNotFound } from './errors/NotificationNotFound';
import { makeNotification } from '@test/factories/notification-factory';

describe('Cancel Notification', () => {
    it('Should be able to cancel a notification', async () => {
        const notificationsRepositoryInMemory =
            new NotificationRepositoryInMemory();

        const cancelNotification = new CancelNotificationUseCase(
            notificationsRepositoryInMemory,
        );

        const notification = makeNotification();

        await notificationsRepositoryInMemory.create(notification);

        await cancelNotification.execute({
            notificationId: notification.id,
        });

        expect(
            notificationsRepositoryInMemory.notifications[0].canceledAt,
        ).toEqual(expect.any(Date));
    });

    it('Should not be able to cancel a non existing notification', async () => {
        const notificationsRepositoryInMemory =
            new NotificationRepositoryInMemory();

        const cancelNotification = new CancelNotificationUseCase(
            notificationsRepositoryInMemory,
        );

        expect(() => {
            return cancelNotification.execute({
                notificationId: 'fake-notification-d',
            });
        }).rejects.toThrow(NotificationNotFound);
    });
});
