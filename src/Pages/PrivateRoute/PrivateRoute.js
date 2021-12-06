import React from 'react';
import useAuth from '../Context/useAuth';
import { useLocation, Navigate} from 'react-router-dom';
import { CircularProgress } from '@mui/material';

const PrivateRoute = ({children, ...rest}) => {
    const { user, isLogin} = useAuth();
    let location = useLocation();
    if (isLogin) { return <CircularProgress /> }
    if (user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;