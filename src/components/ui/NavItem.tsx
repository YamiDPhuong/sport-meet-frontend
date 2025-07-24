import React from 'react';
interface NavItemProps
{
    icon: React.ReactNode;
    label: string;
    href: string;
    isActive?: boolean;
}
const NavItem: React.FC<NavItemProps> = ( { icon, label, href, isActive = false } ) =>
{
    const linkClassName = isActive
        ? 'flex items-center space-x-2 text-black font-extralight'
        : 'flex items-center space-x-2 text-gray-600 hover:text-black';
    const listItemClassName = isActive
        ? 'mb-4 bg-gray-100 p-2 rounded-lg'
        : 'mb-4';

    return (
        <li className={listItemClassName}>
            <a href={href} className={linkClassName}>
                {icon}
                <span>{label}</span>
            </a>
        </li>
    );
};
export default NavItem;