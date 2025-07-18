import React from 'react';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, Menu } from 'antd';

interface UserProfileProps
{
    user: {
        name: string;
        avatarUrl: string;
    };
}

const UserProfile: React.FC<UserProfileProps> = ( { user } ) =>
{
    const menu = (
        <Menu>
            <Menu.Item key="profile" icon={<UserOutlined />}>
                View Profile
            </Menu.Item>
        </Menu>
    );

    return (
        <Dropdown overlay={menu} trigger={[ 'click' ]}>
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