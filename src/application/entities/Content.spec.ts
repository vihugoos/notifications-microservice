import { Content } from './Content';

describe('Notification Content', () => {
    it('should be able to create a notification content', () => {
        const content = new Content('You received a new friend notification!');

        expect(content).toBeTruthy();
    });

    it('should not be able to create a notification content with less than 5 characters', () => {
        expect(() => new Content('Hi')).toThrow();
    });

    it('should not be able to create a notification content with more than 240 characters', () => {
        expect(() => new Content('a'.repeat(241))).toThrow();
    });
});
