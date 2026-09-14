export enum ParticipantRole {
    Guest = 'guest',
    Performer = 'performer',
    Organizer = 'organizer',
    Celebrated = 'celebrated',
}

export enum EventType {
    Birthday = 'birthday',
    FamilyEvent = 'familyEvent',
    Festival = 'festival',
    Concert = 'concert',
    Other = 'other',
}

export enum EventTheme {
    Music = 'music',
    Food = 'food',
    Culture = 'culture',
    Sport = 'sport',
    Private = 'private',
    Wedding = 'wedding',
    Other = 'other',
}

export type SimpleLocation = string;

export interface DetailedLocation {
    city: string;
    venue: string;
    address?: string;
}

export type EventLocation = SimpleLocation | DetailedLocation;