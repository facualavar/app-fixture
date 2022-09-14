import { useContext, useEffect, useState } from "react"
import { Link, Outlet } from "react-router-dom"
import alertContext from "../../contexts/alertContext"
import GroupService from "../../services/group-service"
import GroupThumbnail from "./GroupThumbnail/GroupThumbnail"
import Box from "../../components/Box/Box"
import "./groups.css"

const Groups = () => {
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
        <Box>
            <Outlet />
            <Box className="groups">
                {
                    groups.length ?
                    groups.map((group, index) => 
                    <Link key={index} to={`/groups/${group.id}`} className="link">
                        <GroupThumbnail name={group.name} teams={group.teams} />
                    </Link>)
                    : null
                }
            </Box>
        </Box>
    )
}

export default Groups