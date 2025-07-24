export type MemberRole = "Coach" | "Player";

export interface Member
{
    id: string;
    name: string;
    email: string;
    avatar?: string;
    role: MemberRole;
    teamId?: string;
    phone?: string;
    birthDate?: string;
    createdAt: string;
    updatedAt: string;
}

export type TeamType = 'Professional' | 'Youth' | 'Amateur';
export interface Team
{
    id: string;
    logo?: string;
    teamName: string;
    type: TeamType;
    members: Member[];
    memberCount: number;
    sport: string;
    created: string;
}

export type EventType = "Training" | "Competition" | "Meeting";

export interface Event
{
    id: string;
    title: string;
    type: EventType;
    date: string;
    time: string;
    teamId: string;
    location: string;
    description?: string;
}

export interface Event
{
    id: string;
    title: string;
    type: EventType;
    date: string;         // ISO string with time: '2025-01-25T19:00:00Z'
    teamId: string;
    teamName?: string;    // Optional if you want to avoid extra lookups
    location: string;
    description?: string;
    time: string;
    createdAt: string;
    updatedAt: string;
}