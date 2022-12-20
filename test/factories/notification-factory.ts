import { Content } from '@application/entities/Content';
import {
    Notification,
    NotificationProps,
} from '@application/entities/Notification';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}): Notification {
    return new Notification({
        recipientId: 'example-recipient-id',
        content: new Content('New friend solicitation!'),
        category: 'Social',
        ...override,
    });
}
