import React from 'react';
import { BellOutlined } from '@ant-design/icons';
import { Badge } from 'antd';

interface NotificationBellProps
{
    hasNotification: boolean;
}

const NotificationBell: React.FC<NotificationBellProps> = ( { hasNotification } ) =>
{
    return (
        <div className="flex items-center">
            <Badge dot={hasNotification}>
                <BellOutlined className="text-xl" />
            </Badge>
        </div>
    );
};

export default NotificationBell;