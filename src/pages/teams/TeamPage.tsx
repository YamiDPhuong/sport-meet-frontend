import React, { useState, useEffect } from 'react';
import Button from '../../components/ui/Button';
import { PlusOutlined } from '@ant-design/icons';
import PageTitle from '../../components/ui/PageTitle';
import TeamTable from '../../components/ui/TeamTable';
import CreateTeamModal from '../../features/team/CreateTeamModal';
import type { Team } from '../../types/team';

import basketballImg from '../../assets/images/basketball.png';
import soccerImg from '../../assets/images/soccer-ball-variant.png';
import tennisImg from '../../assets/images/tennis.png';

const mockData = [
    {
        key: '1',
        logo: basketballImg,
        teamName: 'Lightning Bolts',
        type: 'Professional team',
        members: 15,
        sport: 'Basketball',
        created: 'Jan 10, 2025',
    },
    {
        key: '2',
        logo: soccerImg,
        teamName: 'Thunder Strikers',
        type: 'Youth team',
        members: 22,
        sport: 'Soccer',
        created: 'Feb 5, 2025',
    },
    {
        key: '3',
        logo: tennisImg,
        teamName: 'Ace Smashers',
        type: 'Amateur team',
        members: 8,
        sport: 'Tennis',
        created: 'Mar 15, 2025',
    },
];

const TeamPage: React.FC = () =>
{
    const [ teams, setTeams ] = useState<Team[]>( [] );
    const [ loading, setLoading ] = useState( true );
    const [ open, setOpen ] = useState( false );

    useEffect( () =>
    {
        const fetchTeams = () =>
        {
            setLoading( true );
            setTimeout( () =>
            {
                setTeams( mockData );
                setLoading( false );
            }, 500 );
        };

        fetchTeams();
    }, [] );
    const handleCreateTeam = ( values: Team ) =>
    {
        setOpen( false );
        console.log( values );
    };

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-6">
                <PageTitle title="All Teams" subtitle="Manage and organize your sports teams" />
                <Button icon={<PlusOutlined />} text="Create Team" type="primary" size="large" className='font-bold' onClick={() => setOpen( true )} />
            </div>
            <TeamTable dataSource={teams} pagination={false} loading={loading} />
            <CreateTeamModal visible={open} onClose={() => setOpen( false )} onFinish={handleCreateTeam} />
        </div>
    );
};

export default TeamPage;