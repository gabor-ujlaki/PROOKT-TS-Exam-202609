
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

const birthday = new Event(
    'EVT-002',
    'Anna születésnapja',
    'Házibuli',
    new Date('2026-09-20T19:00:00'),
    EventTheme.Private,
    EventType.Birthday
);

manager.createEvent(birthday);

const p2 = new Participant('PPT-002', 'Gipsz Jakab', 'jakab.gipsz.tom@example.com', ParticipantRole.Organizer);
const p3 = new Participant('PPT-003', 'Nagy Anna', 'anna.nagy@example.com', ParticipantRole.Celebrated);

manager.addParticipantToEvent('EVT-002', p2);
manager.addParticipantToEvent('EVT-002', p3);

console.log('\n*** Rendezvények listája ***');
for (const event of manager.listEvents()) {
    event.print();
}

console.log('\n*** Zenei rendezvények ***');
const musicEvents = manager.findByTheme(EventTheme.Music);
musicEvents.forEach(event => event.print());