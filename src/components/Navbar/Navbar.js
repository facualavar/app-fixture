import { NavLink } from "react-router-dom"
import useAuth from "../../hooks/useAuth";
import Box from "../Box/Box"
import "./nabvar.css"

const Nabvar = () => {
    const auth = useAuth();

    return (
        <Box backgroundColor="#440A16" color="#fff">
            <ul className="list-navbar">
            {auth.user ?
                <NavLink to="/groups" className="link-navbar">
                    Log out
                </NavLink> :
                <NavLink to="/login" className="link-navbar">
                    Log in
                </NavLink>
            }
            </ul>
        </Box>
    )
}

export default Nabvar