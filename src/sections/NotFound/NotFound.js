import Box from "../../components/Box/Box"
import Logo from "../../components/Logo/Logo"

const NotFound = () => {
    return (
        <Box display="flex" justifyContent="center" color="#fff">
            <Box>
                <Logo />
                <Box display="flex" justifyContent="center">
                    <h1>Error 404</h1>
                </Box>
            </Box>
        </Box>
    )
}

export default NotFound