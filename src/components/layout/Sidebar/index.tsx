import React from 'react';
import
{
    DashboardOutlined,
    TeamOutlined,
    CalendarOutlined,
    UserOutlined,
} from '@ant-design/icons';

import NavItem from '../../ui/NavItem';
import SidebarLogo from './SidebarLogo';

const activeItem = 'teams' as string;

const Sidebar: React.FC = () =>
{
    return (
        <aside className="w-64 bg-white border-r h-screen p-4">
            <SidebarLogo />
            <nav>
                <ul>
                    <NavItem
                        href="#"
                        icon={<DashboardOutlined />}
                        label="Dashboard"
                        isActive={activeItem === 'dashboard'}
                    />
                    <NavItem
                        href="#"
                        icon={<TeamOutlined />}
                        label="Teams"
                        isActive={activeItem === 'teams'}
                    />
                    <NavItem
                        href="#"
                        icon={<CalendarOutlined />}
                        label="Events"
                        isActive={activeItem === 'events'}
                    />
                    <NavItem
                        href="#"
                        icon={<UserOutlined />}
                        label="Profile"
                        isActive={activeItem === 'profile'}
                    />
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;