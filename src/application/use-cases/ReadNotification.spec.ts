import { NotificationRepositoryInMemory } from '@test/repositories/in-memory/NotificationsRepositoryInMemory';
import { NotificationNotFound } from './errors/NotificationNotFound';
import { makeNotification } from '@test/factories/notification-factory';
import { ReadNotification } from './ReadNotification';

describe('Read Notification', () => {
    it('should be able to read a notification', async () => {
        const notificationsRepository = new NotificationRepositoryInMemory();

        const readNotification = new ReadNotification(notificationsRepository);

        const notification = makeNotification();

        await notificationsRepository.create(notification);

        await readNotification.execute(notification.id);

        expect(notificationsRepository.notifications[0].readAt).toEqual(
            expect.any(Date),
        );
    });

    it('should not be able to read a non existing notification', async () => {
        const notificationsRepository = new NotificationRepositoryInMemory();

        const readNotification = new ReadNotification(notificationsRepository);

        expect(() => {
            return readNotification.execute('fake-notification-d');
        }).rejects.toThrow(NotificationNotFound);
    });
});
