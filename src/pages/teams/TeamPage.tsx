import React, { useState, useEffect } from 'react';
import Button from '../../components/ui/Button';
import { PlusOutlined } from '@ant-design/icons';
import PageTitle from '../../components/ui/PageTitle';
import TeamTable from '../../components/ui/TeamTable';
import CreateTeamModal from '../../features/team/CreateTeamModal';
import type { Team } from '../../types/types';
import { teams } from '../../fake/staticFakeData';

const TeamPage: React.FC = () =>
{

    const [ loading, setLoading ] = useState( true );
    const [ open, setOpen ] = useState( false );

    useEffect( () =>
    {
        const fetchTeams = () =>
        {
            setLoading( true );
            setTimeout( () =>
            {
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