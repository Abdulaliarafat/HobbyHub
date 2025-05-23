import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from './AuthProvider';
import Loading from '../Components/Loading';

const PrivateRouter = ({children}) => {
    const location=useLocation()
    const {loading,user}=use(AuthContext)

    if(loading){
        return <Loading></Loading>
    }
    if(user){
        return children
    }
    return <Navigate state={location?.pathname} to='/authlayout/login'></Navigate>
};

export default PrivateRouter;