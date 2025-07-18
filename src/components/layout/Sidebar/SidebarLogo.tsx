import React from 'react';
import { TrophyFilled } from '@ant-design/icons';

const SidebarLogo: React.FC = () =>
{
    return (
        <div className="flex items-center space-x-2 mb-8">
            <div className="bg-gray-200 p-2 rounded-lg">
                <TrophyFilled className="text-2xl" />
            </div>
            <h1 className="text-xl font-bold">Sports Manager</h1>
        </div>
    );
};

export default SidebarLogo;