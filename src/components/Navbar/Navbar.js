import { NavLink } from "react-router-dom"
import useAuth from "../../hooks/useAuth";
import Box from "../Box/Box"
import "./nabvar.css"

const Nabvar = () => {
    const auth = useAuth();

    return (
        <Box backgroundColor="#440A16" color="#fff">
            {auth.user ?
            <ul className="list-navbar">
                <li className="link-navbar">Hola {auth.user.name}!</li>
                <NavLink to="/logout" className="link-navbar">
                    Log out
                </NavLink>
            </ul> :
            <ul className="list-navbar">
                <NavLink to="/login" className="link-navbar">
                    Log in
                </NavLink>
                <NavLink to="/register" className="link-navbar">
                    Register
                </NavLink>
            </ul>}
        </Box>
    )
}

export default Nabvar