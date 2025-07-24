import React, { useState, useMemo } from 'react';
import { Input } from 'antd';
import { SearchOutlined, DownOutlined, CloseOutlined } from '@ant-design/icons';
import type { Member } from '../../types/types';

interface MemberSelectProps
{
    members: Member[];
    value: string[];
    onChange: ( value: string[] ) => void;
    placeholder?: string;
    label?: string;
    className?: string;
}

const MemberSelect: React.FC<MemberSelectProps> = ( {
    members,
    value: propValue = [],
    onChange,
    placeholder = 'Search members...',
    label = 'Add Members',
    className = ''
} ) =>
{
    const value = Array.isArray( propValue ) ? propValue : [];

    const [ searchTerm, setSearchTerm ] = useState( '' );
    const [ isOpen, setIsOpen ] = useState( false );
    const filteredMembers = useMemo( () =>
    {
        if ( !searchTerm.trim() )
        {
            return members;
        }
        const lowerSearchTerm = searchTerm.toLowerCase();
        return members.filter(
            member =>
                member.name.toLowerCase().includes( lowerSearchTerm ) ||
                member.email.toLowerCase().includes( lowerSearchTerm )
        );
    }, [ members, searchTerm ] );

    const toggleMember = ( memberId: string ) => ( value.includes( memberId ) ? onChange( value.filter( id => id !== memberId ) ) : onChange( [ ...value, memberId ] ) );

    const removeMember = ( memberId: string, e: React.MouseEvent ) =>
    {
        e.stopPropagation();
        onChange( value.filter( id => id !== memberId ) );
    };

    const getInitials = ( name: string ) =>
    {
        return name
            .split( ' ' )
            .map( n => n[ 0 ] )
            .join( '' )
            .toUpperCase();
    };

    const selectedCount = value.length;
    const selectedMembers = members.filter( member => value.includes( member.id ) );
    const buttonText = selectedCount > 0
        ? `${ selectedCount } member${ selectedCount > 1 ? 's' : '' } selected`
        : 'Select team members';

    return (
        <div className={className}>
            <label className="block text-sm mb-2">
                {label}
            </label>

            <div className="relative">
                <button
                    type="button"
                    onClick={() => setIsOpen( !isOpen )}
                    className="w-full px-3 py-2 text-left border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 flex items-center justify-between"
                >
                    <span className={selectedCount > 0 ? 'text-gray-900' : 'text-gray-500'}>
                        {buttonText}
                    </span>
                    <DownOutlined className="text-gray-400" />
                </button>

                {isOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                        <div className="p-3">
                            <div className="relative">
                                <SearchOutlined className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <Input
                                    placeholder={placeholder}
                                    value={searchTerm}
                                    onChange={( e ) => setSearchTerm( e.target.value )}
                                    className="pl-10 w-full"
                                    onClick={( e ) => e.stopPropagation()}
                                />
                            </div>
                        </div>

                        <div className="max-h-48 overflow-y-auto">
                            {filteredMembers.length === 0 ? (
                                <div className="p-3 text-gray-500 text-center">
                                    No members found
                                </div>
                            ) : (
                                filteredMembers.map( ( member ) => (
                                    <div
                                        key={member.id}
                                        className="flex items-center p-3 hover:bg-gray-50 cursor-pointer"
                                        onClick={() => toggleMember( member.id )}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={value.includes( member.id )}
                                            onChange={( e ) =>
                                            {
                                                e.stopPropagation();
                                                toggleMember( member.id );
                                            }}
                                            className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                        />
                                        <div className="flex items-center flex-1">
                                            <div className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center mr-3 overflow-hidden flex-shrink-0">
                                                {member.avatar ? (
                                                    <img
                                                        src={member.avatar}
                                                        alt={member.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                ) : (
                                                    <span className="text-xs font-medium text-gray-600">
                                                        {getInitials( member.name )}
                                                    </span>
                                                )}
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium text-gray-900">
                                                    {member.name}
                                                </div>
                                                <div className="text-xs text-gray-500">
                                                    {member.email}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) )
                            )}
                        </div>
                    </div>
                )}
            </div>

            {selectedCount > 0 && (
                <div className="mt-3 grid grid-cols-3 gap-2">
                    {selectedMembers.map( ( member ) => (
                        <div
                            key={member.id}
                            className="flex items-center bg-blue-50 text-blue-700 rounded-full pl-2 pr-3 py-1 text-sm transition-all duration-200 hover:bg-blue-100"
                        >
                            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-2 overflow-hidden flex-shrink-0 shadow-sm">
                                {member.avatar ? (
                                    <img
                                        src={member.avatar}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <span className="text-xs font-medium text-gray-600">
                                        {getInitials( member.name )}
                                    </span>
                                )}
                            </div>
                            <span className="truncate max-w-[120px] text-sm">
                                {member.name}
                            </span>
                            <button
                                onClick={( e ) => removeMember( member.id, e )}
                                className="ml-1 w-5 h-5 rounded-full flex items-center justify-center text-blue-500 hover:bg-blue-200 hover:text-blue-700 transition-colors duration-150"
                            >
                                <CloseOutlined className="text-xs" />
                            </button>
                        </div>
                    ) )}
                </div>
            )}

            {isOpen && (
                <div
                    className="fixed inset-0 z-0"
                    onClick={() => setIsOpen( false )}
                />
            )}
        </div>
    );
};

export default MemberSelect;
