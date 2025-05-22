import React, { use } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from './AuthProvider';
import Loading from '../Components/Loading';

const PrivateRouter = ({children}) => {
    const {loading,user}=use(AuthContext)
    if(loading){
        return <Loading></Loading>
    }
    if(user & user.photoURL){
        return children
    }
    return <Navigate to='/authlayout/login'></Navigate>
};

export default PrivateRouter;