import { useEffect } from "react";
import { Navigate } from "react-router-dom"
import useAuth from "../../hooks/useAuth";

const Logout = () => {
    const auth = useAuth();

    useEffect(() => {
        const logout = async () => {
            let {response, error} = await auth.signout()
        }

        logout()
    }, [])

    return (
        <Navigate to="/login" />
    )
}

export default Logout