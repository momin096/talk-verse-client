import useAuth from '../hooks/useAuth';
import Loading from '../components/Loading';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { loading, user } = useAuth();
    const location = useLocation();

    console.log('user form private route', user);
    if (loading) return <Loading />
    if (user) return children
    return <Navigate to='/login' state={location.pathname} />



};

export default PrivateRoute;