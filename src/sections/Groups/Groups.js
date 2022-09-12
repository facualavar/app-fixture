import Box from "../../components/Box/Box"
import GroupThumbnail from "./GroupThumbnail/GroupThumbnail"
import "./groups.css"

const Groups = () => {
    const groups = [1,2,3,4,5,6,7,8]

    return (
        <Box className="groups">
            {groups.map(() => <GroupThumbnail />)}
        </Box>
    )
}

export default Groups