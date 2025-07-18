import React from 'react'
import { Table, Tag } from 'antd'
import TeamTableAction from './TeamTableAction';

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
        render: ( record: any ) => <TeamTableAction record={record} />,
    },
];

interface TeamTableProps
{
    dataSource: any;
    pagination?: any | false;
    loading?: boolean;
}

const TeamTable: React.FC<TeamTableProps> = ( { dataSource, pagination, loading } ) =>
{
    return (
        <Table columns={columns} dataSource={dataSource} pagination={pagination} loading={loading} />
    )
}

export default TeamTable