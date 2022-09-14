import { Outlet, useParams } from "react-router-dom";
import Box from "../../components/Box/Box";
import Group from "../../components/Group/Group";
import "./group-section.css"

const GroupSection = () => {
    const { groupId } = useParams();

    return (
        <Box>
            <Group id={groupId} />
            <Outlet />
        </Box>
    )
}

export default GroupSection