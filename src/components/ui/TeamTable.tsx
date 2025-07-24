import React from 'react'
import { Table, Tag } from 'antd'
import TeamTableAction from './TeamTableAction';
import type { Team } from '../../types/types';
import { formatDate } from '../../utils/dateUtils';

const columns = [
    {
        title: 'Logo',
        dataIndex: 'logo',
        key: 'logo',
        render: ( logo: string ) => <img src={logo} alt="Team Logo" className="w-10 h-10 rounded-full" />,
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
        dataIndex: 'memberCount',
        key: 'memberCount',
        render: ( memberCount: number ) => `${ memberCount } members`,
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
        render: ( created: string ) => formatDate( created ),
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