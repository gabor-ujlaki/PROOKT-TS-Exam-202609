import { EventType, EventTheme, EventLocation } from '../EventTypes';
import { IBaseParticipant } from './IBaseParticipant';

export interface IBaseEvent {
    readonly id: string;
    name: string;
    location: EventLocation;
    time: Date;
    eventTheme: EventTheme;
    eventType: EventType;

    addParticipant(participant: IBaseParticipant): void;
    removeParticipant(participantId: string): void;
}

export interface IEvent extends IBaseEvent {
    participants: Map<string, IBaseParticipant>;
}
