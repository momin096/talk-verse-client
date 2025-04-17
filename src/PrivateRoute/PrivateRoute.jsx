import React, { Children } from 'react';
import useAuth from '../hooks/useAuth';
import Loading from '../components/Loading';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { loading, user } = useAuth();
    const location = useLocation();
    console.log(location);

    if (loading) {
        return <Loading />
    }

    if (user) return children
    return <Navigate to={'/login'} state={location?.pathname} />
};

export default PrivateRoute;