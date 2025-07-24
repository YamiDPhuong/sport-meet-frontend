import React from 'react';
import { useLocation } from 'react-router-dom';
import
{
    DashboardOutlined,
    TeamOutlined,
    CalendarOutlined,
    UserOutlined,
} from '@ant-design/icons';

import NavItem from '../../ui/NavItem';
import SidebarLogo from './SidebarLogo';

const Sidebar: React.FC = () =>
{
    const location = useLocation();
    const pathname = location.pathname;

    const getActiveItem = () =>
    {
        if ( pathname === '/' ) return 'dashboard';
        if ( pathname.startsWith( '/teams' ) ) return 'teams';
        if ( pathname.startsWith( '/events' ) ) return 'events';
        if ( pathname.startsWith( '/profile' ) ) return 'profile';
        return '';
    };

    const activeItem = getActiveItem();

    return (
        <aside className="w-64 bg-white border-r h-screen p-4">
            <SidebarLogo />
            <nav>
                <ul>
                    <NavItem
                        href="/"
                        icon={<DashboardOutlined />}
                        label="Dashboard"
                        isActive={activeItem === 'dashboard'}
                    />
                    <NavItem
                        href="/teams"
                        icon={<TeamOutlined />}
                        label="Teams"
                        isActive={activeItem === 'teams'}
                    />
                    <NavItem
                        href="/events"
                        icon={<CalendarOutlined />}
                        label="Events"
                        isActive={activeItem === 'events'}
                    />
                    <NavItem
                        href="/profile"
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