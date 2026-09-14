import { EventTheme } from '../models/EventTypes';
import { IEvent } from '../models/interfaces/IBaseEvent';

export class EventThemeService {
    public groupByTheme(events: IEvent[]): Map<EventTheme, IEvent[]> {
        const map = new Map<EventTheme, IEvent[]>();

        for (const ev of events) {
            const list = map.get(ev.eventTheme) ?? [];
            list.push(ev);
            map.set(ev.eventTheme, list);
        }

        return map;
    }
}
