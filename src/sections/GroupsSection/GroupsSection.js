import { Outlet } from "react-router-dom"
import Box from "../../components/Box/Box"
import GroupsGrid from "../../components/GroupsGrid/GroupsGrid"
import "./groups-section.css"

const GroupsSection = () => {

    return (
        <Box display="flex" justifyContent="center">
            <Box className="container">
                <Outlet />
                <GroupsGrid />
            </Box>
        </Box>
    )
}

export default GroupsSection