import Box from "../../components/Box/Box"
import GroupsGrid from "../../components/GroupsGrid/GroupsGrid"
import Logo from "../../components/Logo/Logo"
import useAuth from "../../hooks/useAuth"
import "./home.css"

const Home = () => {
    const auth = useAuth();

    return (
        <Box display="flex" justifyContent="center">
            <Box className="container">
                <Box display="flex" justifyContent="center">
                    <Logo />
                </Box>
                {auth.user ? <GroupsGrid /> : null}
            </Box>
        </Box>
    )
}

export default Home