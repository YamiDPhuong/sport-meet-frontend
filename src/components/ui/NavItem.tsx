import React from 'react';
import { Link } from 'react-router-dom';

interface NavItemProps
{
    icon: React.ReactNode;
    label: string;
    href: string;
    isActive?: boolean;
    collapsed?: boolean;
}

const NavItem: React.FC<NavItemProps> = ( { icon, label, href, isActive = false, collapsed = false } ) =>
{
    const linkClassName = isActive
        ? 'flex items-center space-x-2 text-black font-extralight'
        : 'flex items-center space-x-2 text-gray-600 hover:text-black';
    const listItemClassName = isActive
        ? 'mb-4 bg-gray-100 p-2 rounded-lg'
        : 'mb-4';

    return (
        <li className={`${ listItemClassName } ${ collapsed ? 'flex justify-center' : '' }`}>
            <Link
                to={href}
                className={`${ linkClassName } ${ collapsed ? 'flex-col space-y-1 space-x-0 p-2' : 'p-2' }`}
                title={collapsed ? label : undefined}
            >
                <span className="text-xl">{icon}</span>
                {!collapsed && <span>{label}</span>}
            </Link>
        </li>
    );
};

export default NavItem;