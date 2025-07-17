import React from 'react';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';
import TeamPage from '../pages/teams/TeamPage';

const MainLayout: React.FC = () =>
{
    return (
        <div className="flex h-screen bg-gray-50">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Header />
                <main className="flex-1 overflow-y-auto">
                    <TeamPage />
                </main>
            </div>
        </div>
    );
};

export default MainLayout;