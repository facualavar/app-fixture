import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import alertContext from "../../contexts/alertContext"
import GroupService from "../../services/group-service"
import Box from "../Box/Box"
import GroupThumbnail from "../GroupThumbnail/GroupThumbnail"
import "./group-grid.css"

const GroupsGrid = () => {
    const groupService = GroupService()
    const alert = useContext(alertContext);

    const [groups, setGroups] = useState([])

    useEffect(() => {
        const getGroups = async () => {
            let {data, error} = await groupService.fetchGroups()

            if (!error) {
                setGroups(data)
                alert.hideAlertError()
            } else {
                alert.showAlertError(error)
            }
        }

        getGroups()
    }, [])

    return (
        <Box className="groups-grid">
            {
                groups.length ?
                groups.map((group, index) =>
                <Link key={index} to={`/groups/${group.id}`} className="link">
                    <GroupThumbnail name={group.name} teams={group.teams} />
                </Link>)
                : null
            }
        </Box>
    )
}

export default GroupsGrid