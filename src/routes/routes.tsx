import MainLayout from '@/layout/MainLayout';
import DashBoard from '@/pages/dashboard/DashBoard';
import TeamPage from '@/pages/teams/TeamPage';
import TeamDetailsPage from '@/pages/teams/TeamDetailsPage';
import ProfilePage from '@/pages/profile/ProfiePage';
import EventPage from '@/pages/event/EventPage';

export const routes = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { index: true, element: <DashBoard /> },
            { path: 'teams', element: <TeamPage /> },
            { path: 'teams/:id', element: <TeamDetailsPage /> },
            { path: 'profile', element: <ProfilePage /> },
            { path: 'events', element: <EventPage /> },
        ],
    },
];
