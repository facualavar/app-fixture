import Box from "../../components/Box/Box"
import GroupsGrid from "../../components/GroupsGrid/GroupsGrid"
import Logo from "../../components/Logo/Logo"
import "./home.css"

const Home = () => {
    return (
        <Box display="flex" justifyContent="center">
            <Box className="container">
                <Box display="flex" justifyContent="center">
                    <Logo />
                </Box>
                <GroupsGrid />
            </Box>
        </Box>
    )
}

export default Home