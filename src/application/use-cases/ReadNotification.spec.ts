import { NotificationRepositoryInMemory } from '@test/repositories/in-memory/NotificationsRepositoryInMemory';
import { NotificationNotFound } from './errors/NotificationNotFound';
import { makeNotification } from '@test/factories/notification-factory';
import { ReadNotification } from './ReadNotification';

describe('Read Notification', () => {
    it('should be able to read a notification', async () => {
        const notificationsRepositoryInMemory =
            new NotificationRepositoryInMemory();

        const readNotification = new ReadNotification(
            notificationsRepositoryInMemory,
        );

        const notification = makeNotification();

        await notificationsRepositoryInMemory.create(notification);

        await readNotification.execute(notification.id);

        expect(notificationsRepositoryInMemory.notifications[0].readAt).toEqual(
            expect.any(Date),
        );
    });

    it('should not be able to read a non existing notification', async () => {
        const notificationsRepositoryInMemory =
            new NotificationRepositoryInMemory();

        const readNotification = new ReadNotification(
            notificationsRepositoryInMemory,
        );

        expect(() => {
            return readNotification.execute('fake-notification-d');
        }).rejects.toThrow(NotificationNotFound);
    });
});
