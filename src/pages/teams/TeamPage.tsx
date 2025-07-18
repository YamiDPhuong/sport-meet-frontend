import React, { useState, useEffect } from 'react';
import Button from '../../components/ui/Button';
import { PlusOutlined } from '@ant-design/icons';
import PageTitle from '../../components/ui/PageTitle';
import TeamTable from '../../components/ui/TeamTable';

const mockData = [
    {
        key: '1',
        logo: 'https://via.placeholder.com/150',
        name: 'Lightning Bolts',
        type: 'Professional team',
        members: 15,
        sport: 'Basketball',
        created: 'Jan 10, 2025',
    },
    {
        key: '2',
        logo: 'https://via.placeholder.com/150',
        name: 'Thunder Strikers',
        type: 'Youth team',
        members: 22,
        sport: 'Soccer',
        created: 'Jan 8, 2025',
    },
    {
        key: '3',
        logo: 'https://via.placeholder.com/150',
        name: 'Ace Smashers',
        type: 'Amateur team',
        members: 8,
        sport: 'Tennis',
        created: 'Jan 5, 2025',
    },
];

const TeamPage: React.FC = () =>
{
    const [ teams, setTeams ] = useState<any[]>( [] );
    const [ loading, setLoading ] = useState( true );

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

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-6">
                <PageTitle title="All Teams" subtitle="Manage and organize your sports teams" />
                <Button icon={<PlusOutlined />} text="Create Team" type="primary" size="large" className='font-bold' />
            </div>
            <TeamTable dataSource={teams} pagination={false} loading={loading} />
        </div>
    );
};

export default TeamPage;