import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import DashBoard from './pages/dashboard/DashBoard';
import TeamPage from './pages/teams/TeamPage';
import TeamDetailsPage from './pages/teams/TeamDetailsPage';
import ProfiePage from './pages/profile/ProfiePage';
import EventPage from './pages/event/EventPage';

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <DashBoard />,
      },
      {
        path: 'teams',
        element: <TeamPage />,
      },
      {
        path: 'teams/:id',
        element: <TeamDetailsPage />,
      },
      {
        path: 'profile',
        element: <ProfiePage />,
      },
      {
        path: 'events',
        element: <EventPage />,
      }
    ],
  },
];

function App ()
{
  return (
    <Router>
      <Routes>
        {routes.map( ( route ) => (
          <Route key={route.path} path={route.path} element={route.element}>
            {route.children?.map( ( child, index ) => (
              <Route
                key={child.path || `index-${ index }`}
                path={child.path}
                index={child.index}
                element={child.element}
              />
            ) )}
          </Route>
        ) )}
      </Routes>
    </Router>
  );
}

export default App;