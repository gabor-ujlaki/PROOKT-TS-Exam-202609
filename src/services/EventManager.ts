import { IEvent } from '../models/interfaces/IBaseEvent';
import { IBaseParticipant } from '../models/interfaces/IBaseParticipant';
import { EventTheme, EventType } from '../models/EventTypes';
import { LogCreate, LogChange } from '../utils/decorators';

export class EventManager<T extends IEvent> {
    private events: Map<string, T> = new Map();

    @LogCreate
    public createEvent(event: T): void {
        if (this.events.has(event.id)) {
            console.warn(`\nA ${event.id} rendezvény már létezik!`);
            return;
        }
        this.events.set(event.id, event);
        console.log(`\nRendezvény létrehozva: ${event.id}`);
    }

    @LogChange
    public updateEvent(id: string, changes: Partial<Omit<T, 'id' | 'participants'>>): void {
        const existing = this.events.get(id);
        if (!existing) {
            console.warn(`\nA ${id} rendezvény nem található!`);
            return;
        }

        if (changes.name !== undefined) existing.name = changes.name as string;
        if (changes.location !== undefined) existing.location = changes.location!;
        if (changes.time !== undefined) existing.time = changes.time!;
        if (changes.eventTheme !== undefined) existing.eventTheme = changes.eventTheme as EventTheme;
        if (changes.eventType !== undefined) existing.eventType = changes.eventType as EventType;

        console.log(`\nRendezvény módosítva: ${id}`);
    }

    public deleteEvent(id: string): void {
        if (!this.events.has(id)) {
            console.warn(`\nA ${id} rendezvény nem található!`);
            return;
        }
        this.events.delete(id);
        console.log(`\nRendezvény törölve: ${id}`);
    }

    public listEvents(): T[] {
        return [...this.events.values()];
    }

    public findByTheme(theme: EventTheme): T[] {
        return [...this.events.values()].filter(e => e.eventTheme === theme);
    }

    public findByType(type: EventType): T[] {
        return [...this.events.values()].filter(e => e.eventType === type);
    }

    public findByTerm(term: string): T[] {
        const regex = new RegExp(term, 'i');
        return [...this.events.values()].filter(e => regex.test(e.name));
    }

    public addParticipantToEvent(eventId: string, participant: IBaseParticipant): void {
        const event = this.events.get(eventId);
        if (!event) {
            console.warn(`\nA ${eventId} rendezvény nem található!`);
            return;
        }
        event.addParticipant(participant);
    }

    public removeParticipantFromEvent(eventId: string, participantId: string): void {
        const event = this.events.get(eventId);
        if (!event) {
            console.warn(`\nA ${eventId} rendezvény nem található!`);
            return;
        }
        event.removeParticipant(participantId);
    }
}
