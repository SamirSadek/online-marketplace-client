import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <div className='loader bw w-96 mt-64 mx-auto'>
        <div className='flow-cross' />
      </div>
    }
    if(user){
       return children;
    }

    return <Navigate state={location.pathname} to='/login' replace></Navigate>
    
};

export default PrivateRoute;