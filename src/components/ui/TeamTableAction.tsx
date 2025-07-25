import React from 'react'
import { Button as AntButton } from 'antd';
import { EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import EditTeamModal from '@/features/team/EditTeamModal';
import type { Team } from '@/types/types';
import { useNavigate } from 'react-router-dom';

interface TeamTableActionProps
{
    record: Team;
}

const TeamTableAction: React.FC<TeamTableActionProps> = ( { record } ) =>
{
    const navigate = useNavigate();
    const [ open, setOpen ] = React.useState( false );

    const handleView = () =>
    {
        console.log( record );
        navigate( `/teams/${ record.id }`, { state: { team: record } } );

    };

    const handleEdit = () =>
    {
        setOpen( true );
    };

    const handleDelete = () =>
    {
        setOpen( true );
    };

    return (
        <div className="space-x-2">
            <AntButton icon={<EyeOutlined />} onClick={handleView} />
            <AntButton icon={<EditOutlined />} onClick={handleEdit} />
            <AntButton icon={<DeleteOutlined />} onClick={handleDelete} danger />
            <EditTeamModal visible={open} onClose={() => setOpen( false )} onFinish={() => setOpen( false )} initialValues={record} />
        </div>
    )
}

export default TeamTableAction