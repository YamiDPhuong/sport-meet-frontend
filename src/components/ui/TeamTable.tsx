import React from 'react'
import { Table, Tag } from 'antd'
import TeamTableAction from './TeamTableAction';
import type { Team } from '../../types/team';

const columns = [
    {
        title: 'Logo',
        dataIndex: 'logo',
        key: 'logo',
        render: ( text: string ) => <img src={text} alt="logo" className="w-8 h-8 rounded-full" />,
    },
    {
        title: 'Team Name',
        dataIndex: 'teamName',
        key: 'teamName',
        render: ( text: string, record: Team ) => (
            <div>
                <p className="font-semibold">{text}</p>
                <p className="text-gray-500 text-sm">{record.type} team</p>
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
        render: ( record: Team ) => <TeamTableAction record={record} />,
    },
];

interface TeamTableProps
{
    dataSource: Team[];
    pagination?: object | false;
    loading?: boolean;
}

const TeamTable: React.FC<TeamTableProps> = ( { dataSource, pagination, loading } ) =>
{
    return (
        <Table columns={columns} dataSource={dataSource} pagination={pagination} loading={loading} />
    )
}

export default TeamTable