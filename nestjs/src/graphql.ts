
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum UserType {
    CLIENT = "CLIENT",
    COACH = "COACH"
}

export class CreateLoginInput {
    email: string;
    password: string;
}

export class RegisterUserInput {
    email: string;
    password: string;
    surname: string;
    name: string;
    type: UserType;
}

export class CreateClientInput {
    userId: number;
    surname: string;
    name: string;
    dob?: Nullable<DateTime>;
    phone?: Nullable<string>;
    address?: Nullable<string>;
    number?: Nullable<number>;
    postal?: Nullable<number>;
    city?: Nullable<string>;
    coachId?: Nullable<number>;
}

export class UpdateClientInput {
    id: number;
}

export class CreateCoachInput {
    surname: string;
    name: string;
    userId: number;
}

export class UpdateCoachInput {
    id: number;
}

export class CreateInviteInput {
    coachId: number;
}

export class UpdateInviteInput {
    id: number;
}

export class CreateNotificationInput {
    exampleField?: Nullable<number>;
}

export class UpdateNotificationInput {
    id: number;
}

export class CreateUserInput {
    email: string;
    password: string;
    createdAt?: Nullable<DateTime>;
    profile_image?: Nullable<string>;
}

export class UpdateUserInput {
    id: number;
}

export class Login {
    email: string;
    password: string;
    type: UserType;
}

export class MeInfo {
    role: UserType;
    id: number;
}

export abstract class IQuery {
    abstract me(): Nullable<MeInfo> | Promise<Nullable<MeInfo>>;

    abstract clients(filter?: Nullable<string>): Nullable<Client>[] | Promise<Nullable<Client>[]>;

    abstract client(id: number): Nullable<Client> | Promise<Nullable<Client>>;

    abstract coaches(): Nullable<Coach>[] | Promise<Nullable<Coach>[]>;

    abstract coach(id: number): Nullable<Coach> | Promise<Nullable<Coach>>;

    abstract invites(): Nullable<Invite>[] | Promise<Nullable<Invite>[]>;

    abstract invite(id: number): Nullable<Invite> | Promise<Nullable<Invite>>;

    abstract notifications(): Nullable<Notification>[] | Promise<Nullable<Notification>[]>;

    abstract notification(id: number): Nullable<Notification> | Promise<Nullable<Notification>>;

    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createLogin(createLogin: CreateLoginInput): number | Promise<number>;

    abstract registerUser(registerUser: RegisterUserInput): number | Promise<number>;

    abstract logout(): Nullable<boolean> | Promise<Nullable<boolean>>;

    abstract createClient(createClientInput: CreateClientInput): Client | Promise<Client>;

    abstract updateClient(updateClientInput: UpdateClientInput): Client | Promise<Client>;

    abstract removeClient(id: number): Nullable<Client> | Promise<Nullable<Client>>;

    abstract createCoach(createCoachInput: CreateCoachInput): Coach | Promise<Coach>;

    abstract updateCoach(updateCoachInput: UpdateCoachInput): Coach | Promise<Coach>;

    abstract removeCoach(id: number): Nullable<Coach> | Promise<Nullable<Coach>>;

    abstract createInvite(): Invite | Promise<Invite>;

    abstract updateInvite(updateInviteInput: UpdateInviteInput): Invite | Promise<Invite>;

    abstract removeInvite(id: number): Nullable<Invite> | Promise<Nullable<Invite>>;

    abstract createNotification(createNotificationInput: CreateNotificationInput): Notification | Promise<Notification>;

    abstract updateNotification(updateNotificationInput: UpdateNotificationInput): Notification | Promise<Notification>;

    abstract removeNotification(id: number): Nullable<Notification> | Promise<Nullable<Notification>>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export class Client {
    id: number;
    user?: Nullable<User>;
    surname?: Nullable<string>;
    name?: Nullable<string>;
    dob?: Nullable<DateTime>;
    phone?: Nullable<string>;
    address?: Nullable<string>;
    number?: Nullable<number>;
    postal?: Nullable<number>;
    city?: Nullable<string>;
    coachId?: Nullable<Coach>;
}

export class Coach {
    id: number;
    surname: string;
    name: string;
    user: User;
    clients?: Nullable<Nullable<Client>[]>;
    invites?: Nullable<Nullable<Invite>[]>;
}

export class Invite {
    id?: Nullable<string>;
    coach: Coach;
    client?: Nullable<Client>;
    invalidated?: Nullable<DateTime>;
}

export class Notification {
    exampleField?: Nullable<number>;
}

export class User {
    id: number;
    email: string;
    password: string;
    createdAt?: Nullable<DateTime>;
    profile_image?: Nullable<string>;
}

export type DateTime = any;
type Nullable<T> = T | null;
