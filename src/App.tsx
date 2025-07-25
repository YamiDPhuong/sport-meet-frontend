import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes/routes';

function App ()
{
  return (
    <Router>
      <Routes>
        {routes.map( route => (
          <Route key={route.path} path={route.path} element={route.element}>
            {route.children?.map( ( child, index ) => (
              <Route
                key={child.path || `index-${ index }`}
                index={child.index}
                path={child.index ? undefined : child.path}
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
