import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../pages/private/Dashboard';


const PrivateRoute = () => {
    const isAuthenticated = true;

    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return (
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      );


}

export default PrivateRoute;