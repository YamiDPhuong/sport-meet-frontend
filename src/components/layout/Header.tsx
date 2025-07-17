import React from 'react';
import { Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import PageTitle from '../ui/PageTitle';
import NotificationBell from '../ui/NotificationBell';
import UserProfile from '../ui/UserProfile';

const Header: React.FC = () =>
{
    const user = {
        name: 'John Doe',
        avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    };

    return (
        <header className="flex items-center justify-between bg-white p-4 shadow-sm">
            <PageTitle title="Teams" subtitle="Manage your sports teams" />

            <div className="flex items-center space-x-6">
                <NotificationBell hasNotification={true} />
                <UserProfile user={user} />
                <Button icon={<LogoutOutlined />}>
                    Logout
                </Button>
            </div>
        </header>
    );
};

export default Header;