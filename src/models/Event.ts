import { IEvent } from './interfaces/IBaseEvent';
import { EventType, EventTheme, EventLocation } from './EventTypes';
import { IBaseParticipant } from './interfaces/IBaseParticipant';
import { isDetailedLocation, isSimpleLocation } from '../utils/typeGuards';

export class Event implements IEvent {
    private _id: string;
    private _name: string;
    private _location: EventLocation;
    private _time: Date;
    private _eventTheme: EventTheme;
    private _eventType: EventType;
    public participants: Map<string, IBaseParticipant> = new Map();

    constructor(
        id: string,
        name: string,
        location: EventLocation,
        time: Date,
        eventTheme: EventTheme,
        eventType: EventType
    ) {
        this._id = id;
        this._name = name;
        this._location = location;
        this._time = time;
        this._eventTheme = eventTheme;
        this._eventType = eventType;
    }

    public get id(): string {
        return this._id;
    }

    public get name(): string {
        return this._name;
    }

    public set name(newName: string) {
        this._name = newName;
    }

    public get location(): EventLocation {
        return this._location;
    }

    public set location(newLocation: EventLocation) {
        this._location = newLocation;
    }

    public get time(): Date {
        return this._time;
    }

    public set time(newTime: Date) {
        this._time = newTime;
    }

    public get eventTheme(): EventTheme {
        return this._eventTheme;
    }

    public set eventTheme(newTheme: EventTheme) {
        this._eventTheme = newTheme;
    }

    public get eventType(): EventType {
        return this._eventType;
    }

    public set eventType(newType: EventType) {
        this._eventType = newType;
    }

    public addParticipant(participant: IBaseParticipant): void {
        if (this.participants.has(participant.id)) {
            console.warn(`\nA ${participant.id} résztvevő már regisztrálva erre a rendezvényre!`);
            return;
        }
        this.participants.set(participant.id, participant);
        console.log(`\nRésztvevő hozzáadva: ${participant.id}`);
    }

    public removeParticipant(participantId: string): void {
        if (!this.participants.has(participantId)) {
            console.warn(`\nA ${participantId} résztvevő nem található ezen a rendezvényen!`);
            return;
        }
        this.participants.delete(participantId);
        console.log(`\nRésztvevő eltávolítva: ${participantId}`);
    }

    public print(): void {
        console.log(`\n${'='.repeat(60)}`);
        console.log(`Rendezvény ID: ${this._id}`);
        console.log(`Név: ${this._name}`);
        console.log(`Téma: ${this._eventTheme} | Típus: ${this._eventType}`);
        console.log(`Időpont: ${this._time.toLocaleString('hu-HU')}`);

        if (isSimpleLocation(this._location)) {
            console.log(`Helyszín: ${this._location}`);
        }

        if (isDetailedLocation(this._location)) {
            console.log(
                `Helyszín: ${this._location.city}, ${this._location.venue} (${this._location.address ?? '-'})`
            );
        }

        console.log(`Résztvevők száma: ${this.participants.size}`);
        console.log(`${'-'.repeat(60)}`);

        if (this.participants.size === 0) {
            console.log('Nincsenek résztvevők.');
        } else {
            for (const p of this.participants.values()) {
                console.log(`- ${p.name} (${p.email}) [${p.role}]`);
            }
        }

        console.log(`${'='.repeat(60)}`);
    }
}
