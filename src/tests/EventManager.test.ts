import { Event } from '../models/Event';
import { Participant } from '../models/Participant';
import { EventManager } from '../services/EventManager';
import { EventTheme, EventType, ParticipantRole } from '../models/EventTypes';

describe('EventManager', () => {
    test('createEvent & addParticipant', () => {
        const manager = new EventManager<Event>();

        const event = new Event(
            'TEST-EVT-001',
            'Test band',
            { city: 'Test city', venue: 'Test location', },
            new Date('2026-01-01T20:00:00'),
            EventTheme.Music,
            EventType.Concert
        );

        manager.createEvent(event);

        const participant = new Participant(
            'TEST-PPT-001',
            'Test participiant',
            'test@example.com',
            ParticipantRole.Guest
        );

        manager.addParticipantToEvent('TEST-EVT-001', participant);

        const events = manager.listEvents();
        expect(events.length).toBe(1);
        expect(events[0].participants.size).toBe(1);
        expect(events[0].participants.get('TEST-PPT-001')?.name).toBe('Test participiant');
    });
});
