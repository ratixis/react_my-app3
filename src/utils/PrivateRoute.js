import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
    let auth = {'token': true}
    return(
        auth.token ? <Outlet/> : <Navigate to= "/" />

    )
}

export default PrivateRoute