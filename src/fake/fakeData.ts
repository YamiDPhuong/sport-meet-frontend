import { faker } from '@faker-js/faker';
import type { Member, MemberRole } from '../types/types';
import type { Team, TeamType } from '../types/types';
import type { Event, EventType } from '../types/types';

faker.seed( 123 );

// Generate a fake member
export const generateFakeMember = ( teamId: string ): Member => ( {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    role: faker.helpers.arrayElement<MemberRole>( [ 'Coach', 'Player' ] ),
    phone: faker.phone.number( { style: 'human' } ),
    birthDate: faker.date.birthdate( { min: 18, max: 40, mode: 'age' } ).toISOString().split( 'T' )[ 0 ],
    avatar: faker.image.avatar(),
    teamId,
    createdAt: faker.date.past().toISOString(),
    updatedAt: faker.date.recent().toISOString(),
} );

// Generate a fake event
export const generateFakeEvent = ( teamId: string, teamName: string ): Event => ( {
    id: faker.string.uuid(),
    title: faker.company.catchPhrase(),
    type: faker.helpers.arrayElement<EventType>( [ 'Training', 'Competition', 'Meeting' ] ),
    date: faker.date.future().toISOString(),
    time: faker.date.future().toISOString(),
    teamId,
    teamName,
    location: faker.location.city(),
    description: faker.lorem.sentence(),
    createdAt: faker.date.past().toISOString(),
    updatedAt: faker.date.recent().toISOString(),
} );

// Main generator
export const generateFakeData = ( teamCount = 3 ) =>
{
    const teams: Team[] = [];
    const fakeMembersMap: Record<string, Member[]> = {};
    const fakeEventsMap: Record<string, Event[]> = {};

    for ( let i = 0; i < teamCount; i++ )
    {
        const teamId = faker.string.uuid();
        const memberCount = faker.number.int( { min: 3, max: 8 } );
        const members: Member[] = Array.from( { length: memberCount }, () => generateFakeMember( teamId ) );
        const events: Event[] = Array.from( { length: faker.number.int( { min: 2, max: 4 } ) }, () =>
            generateFakeEvent( teamId, `Team ${ i + 1 }` )
        );

        fakeMembersMap[ teamId ] = members;
        fakeEventsMap[ teamId ] = events;

        teams.push( {
            id: teamId,
            teamName: `Team ${ i + 1 }`,
            type: faker.helpers.arrayElement<TeamType>( [ 'Professional', 'Youth', 'Amateur' ] ),
            sport: faker.helpers.arrayElement( [ 'Basketball', 'Soccer', 'Tennis' ] ),
            logo: faker.image.avatar(),
            members,
            memberCount,
            created: faker.date.past().toISOString(),
        } );
    }

    // All members and events
    const allMembers = Object.values( fakeMembersMap ).flat();
    const allEvents = Object.values( fakeEventsMap ).flat();

    return {
        teams,
        allMembers,
        allEvents,
        fakeMembersMap, // Record<teamId, Member[]>
        fakeEventsMap,  // Record<teamId, Event[]>
    };
};
