
import { Event } from './models/Event';
import { Participant } from './models/Participant';
import { EventManager } from './services/EventManager';
import { EventTheme, EventType, ParticipantRole } from './models/EventTypes';


/* TESZT */
const manager = new EventManager<Event>();

const concert = new Event(
    'EVT-001',
    'Metallica World Tour 2026',
    { city: 'Budapest', venue: 'Puskás Aréna', address: '1146, Istvánmezei út 3-5' },
    new Date('2026-07-15T18:00:00'),
    EventTheme.Music,
    EventType.Concert
);

manager.createEvent(concert);

const p1 = new Participant('PPT-001', 'Teszt Elek', 'elek.teszt@example.com', ParticipantRole.Guest);

manager.addParticipantToEvent('EVT-001', p1);

console.log('\n*** Rendezvények listája ***');
for (const event of manager.listEvents()) {
    event.print();
}
