import { EventLocation, DetailedLocation } from '../models/EventTypes';

export function isDetailedLocation(location: EventLocation): location is DetailedLocation {
    return typeof location === 'object' && 'city' in location && 'venue' in location;
}

export function isSimpleLocation(location: EventLocation): location is string {
    return typeof location === 'string';
}