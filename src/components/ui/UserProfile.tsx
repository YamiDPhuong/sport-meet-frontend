import React from 'react';
import { DownOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Dropdown } from 'antd';
import type { MenuProps } from 'antd';

interface UserProfileProps
{
    user: {
        name: string;
        avatarUrl: string;
    };
}

const UserProfile: React.FC<UserProfileProps> = ( { user } ) =>
{
    const items: MenuProps[ 'items' ] = [
        {
            key: 'profile',
            icon: <UserOutlined />,
            label: 'View Profile',
        },
        {
            key: 'Settings',
            icon: <SettingOutlined />,
            label: 'Settings',
        }
    ];

    return (
        <Dropdown menu={{ items }} trigger={[ 'click' ]}>
            <div className="flex cursor-pointer items-center space-x-2">
                <Avatar src={user.avatarUrl} />
                <span className="p-0.5"></span>
                <span className="font-medium">{user.name}</span>
                <DownOutlined style={{ color: 'rgba(0, 0, 0, 0.45)' }} />
            </div>
        </Dropdown>
    );
};

export default UserProfile;