import React from 'react';
import { Button, Table, Tag } from 'antd';
import { EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

const columns = [
    {
        title: 'Logo',
        dataIndex: 'logo',
        key: 'logo',
        render: ( text: string ) => <img src={text} alt="logo" className="w-8 h-8 rounded-full" />,
    },
    {
        title: 'Team Name',
        dataIndex: 'name',
        key: 'name',
        render: ( text: string, record: any ) => (
            <div>
                <p className="font-semibold">{text}</p>
                <p className="text-gray-500 text-sm">{record.type}</p>
            </div>
        ),
    },
    {
        title: 'Members',
        dataIndex: 'members',
        key: 'members',
        render: ( members: number ) => `${ members } members`,
    },
    {
        title: 'Sport',
        dataIndex: 'sport',
        key: 'sport',
        render: ( sport: string ) => <Tag>{sport}</Tag>,
    },
    {
        title: 'Created',
        dataIndex: 'created',
        key: 'created',
    },
    {
        title: 'Actions',
        key: 'actions',
        render: () => (
            <div className="space-x-2">
                <Button icon={<EyeOutlined />} />
                <Button icon={<EditOutlined />} />
                <Button icon={<DeleteOutlined />} danger />
            </div>
        ),
    },
];

const data = [
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


const TeamDetails: React.FC = () =>
{
    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-2xl font-bold">All Teams</h2>
                    <p className="text-gray-500">Manage and organize your sports teams</p>
                </div>
                <Button type="primary" size="large">
                    + Create Team
                </Button>
            </div>
            <Table columns={columns} dataSource={data} pagination={false} />
        </div>
    );
};

export default TeamDetails;