import React from 'react';
import { useLocation } from 'react-router-dom';
import
{
    DashboardOutlined,
    TeamOutlined,
    CalendarOutlined,
    UserOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';

import NavItem from '@/components/ui/NavItem';
import SidebarLogo from './SidebarLogo';
import { useSidebarStore } from '@/store/useSidebarStore';

const Sidebar: React.FC = () =>
{
    const location = useLocation();
    const pathname = location.pathname;
    const { isOpen, toggle } = useSidebarStore();

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
        <aside className={`bg-white border-r border-gray-200 border-2 h-screen p-4 transition-all duration-300 ${ isOpen ? 'w-64' : 'w-20' }`}>
            <div className={`flex ${ isOpen ? 'justify-between' : 'justify-center' } items-center ${ !isOpen ? 'mb-2' : 'mb-4' }`}>
                {isOpen && <SidebarLogo />}
                <button
                    onClick={toggle}
                    className={`p-2 rounded-md hover:bg-gray-100 transition-colors ${ !isOpen ? 'mx-auto' : '' }`}
                    aria-label={isOpen ? 'Collapse sidebar' : 'Expand sidebar'}
                >
                    {isOpen ? (
                        <MenuFoldOutlined className="text-black text-xl" />
                    ) : (
                        <MenuUnfoldOutlined className="text-black text-xl" />
                    )}
                </button>
            </div>
            <div className={`ant-layout-sider-children ${ !isOpen ? 'mt-2' : '' }`}>
                <ul>
                    <NavItem
                        href="/"
                        icon={<DashboardOutlined />}
                        label={isOpen ? "Dashboard" : ""}
                        isActive={activeItem === 'dashboard'}
                        collapsed={!isOpen}
                    />
                    <NavItem
                        href="/teams"
                        icon={<TeamOutlined />}
                        label={isOpen ? "Teams" : ""}
                        isActive={activeItem === 'teams'}
                        collapsed={!isOpen}
                    />
                    <NavItem
                        href="/events"
                        icon={<CalendarOutlined />}
                        label={isOpen ? "Events" : ""}
                        isActive={activeItem === 'events'}
                        collapsed={!isOpen}
                    />
                    <NavItem
                        href="/profile"
                        icon={<UserOutlined />}
                        label={isOpen ? "Profile" : ""}
                        isActive={activeItem === 'profile'}
                        collapsed={!isOpen}
                    />
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;