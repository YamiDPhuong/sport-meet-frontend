import React from 'react'
import { Button as AntButton } from 'antd';
import { EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

interface TeamTableActionProps
{
    record: any;
}

const TeamTableAction: React.FC<TeamTableActionProps> = ( { record } ) =>
{
    const handleView = () =>
    {
        console.log( 'View:', record );
    };

    const handleEdit = () =>
    {
        console.log( 'Edit:', record );
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
        </div>
    )
}

export default TeamTableAction