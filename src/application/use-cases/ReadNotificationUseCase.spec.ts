import { NotificationRepositoryInMemory } from '@test/repositories/in-memory/NotificationsRepositoryInMemory';
import { NotificationNotFound } from './errors/NotificationNotFound';
import { makeNotification } from '@test/factories/notification-factory';
import { ReadNotificationUseCase } from './ReadNotificationUseCase';

describe('Read Notification', () => {
    it('Should be able to read a notification', async () => {
        const notificationsRepositoryInMemory =
            new NotificationRepositoryInMemory();

        const readNotificationUseCase = new ReadNotificationUseCase(
            notificationsRepositoryInMemory,
        );

        const notification = makeNotification();

        await notificationsRepositoryInMemory.create(notification);

        await readNotificationUseCase.execute({
            notificationId: notification.id,
        });

        expect(notificationsRepositoryInMemory.notifications[0].readAt).toEqual(
            expect.any(Date),
        );
    });

    it('Should not be able to read a non existing notification', async () => {
        const notificationsRepositoryInMemory =
            new NotificationRepositoryInMemory();

        const readNotificationUseCase = new ReadNotificationUseCase(
            notificationsRepositoryInMemory,
        );

        expect(() => {
            return readNotificationUseCase.execute({
                notificationId: 'fake-notification-d',
            });
        }).rejects.toThrow(NotificationNotFound);
    });
});
