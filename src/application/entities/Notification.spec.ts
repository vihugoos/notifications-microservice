import { Content } from './Content';
import { Notification } from './Notification';

describe('Notification', () => {
    it('should be able to create a notification', () => {
        const notification = new Notification({
            content: new Content('You received a new friend notification!'),
            category: 'Social',
            recipientId: 'example-recipient-id',
        });

        expect(notification).toBeTruthy();
    });
});
