// src/models/Participant.ts
import { IBaseParticipant } from './interfaces/IBaseParticipant';
import { ParticipantRole } from './EventTypes';

export class Participant implements IBaseParticipant {
    private _id: string;
    private _name: string;
    private _email: string;
    private _role: ParticipantRole;

    constructor(id: string, name: string, email: string, role: ParticipantRole) {
        this._id = id;
        this._name = name;
        this._email = email;
        this._role = role;
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

    public get email(): string {
        return this._email;
    }

    public set email(newEmail: string) {
        this._email = newEmail;
    }

    public get role(): ParticipantRole {
        return this._role;
    }

    public set role(newRole: ParticipantRole) {
        this._role = newRole;
    }

    public print(): void {
        console.log(
            `ID: ${this._id} | Név: ${this._name} | Email: ${this._email} | Szerep: ${this._role}`
        );
    }
}
