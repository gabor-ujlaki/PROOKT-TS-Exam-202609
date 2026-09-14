import { ParticipantRole } from '../EventTypes';

export interface IBaseParticipant {
    readonly id: string;
    name: string;
    email: string;
    role: ParticipantRole;
}
