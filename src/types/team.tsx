export interface Member
{
    id: string;
    name: string;
    email: string;
    avatar?: string;
}

export interface Team
{
    key?: string;
    logo?: string;
    teamName: string;
    type: string;
    members: number | string[];
    sport: string;
    created: string;
}
