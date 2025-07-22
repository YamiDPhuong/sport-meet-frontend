import React from 'react'
import { Button as AntButton } from 'antd';
import { EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import EditTeamModal from '../../features/team/EditTeamModal';

interface TeamTableActionProps
{
    record: any;
}

const TeamTableAction: React.FC<TeamTableActionProps> = ( { record } ) =>
{
    const [ open, setOpen ] = React.useState( false );

    const handleView = () =>
    {
        console.log( 'View:', record );
    };

    const handleEdit = () =>
    {
        console.log( 'Edit:', record );
        setOpen( true );

    };

    const handleDelete = () =>
    {
        console.log( 'Delete:', record );
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