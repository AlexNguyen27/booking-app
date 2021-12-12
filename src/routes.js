import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import Register from './pages/Register';
// import DashboardApp from './pages/DashboardApp';
// import Products from './pages/Products';
// import Blog from './pages/Blog';
import Booking from './pages/Booking';
import NotFound from './pages/Page404';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/login" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/booking" replace /> },
        { path: 'booking', element: <Booking /> }
        // { path: 'app', element: <DashboardApp /> },
        // { path: 'products', element: <Products /> },
        // { path: 'blog', element: <Blog /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
