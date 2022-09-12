import Box from "../../components/Box/Box"
import GroupThumbnail from "./GroupThumbnail/GroupThumbnail"
import "./groups.css"
import { useEffect, useState } from "react"
import { fetchGroups } from "../../services/group-service"
import { Link } from "react-router-dom"
import Alert from "../../components/Alert/Alert"

const Groups = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    const [groups, setGroups] = useState([])

    useEffect(() => {
        setIsLoading(true)
        getGroups()
    }, [])

    const getGroups = async () => {
        let {data, error} = await fetchGroups()

        error ? setError(error) : setGroups(data)
        setIsLoading(false)
    }

    return (
        <Box className="groups">
            {
                isLoading ? <Alert color="yellow">Cargando ...</Alert>:
                error ? <Alert color="red">Error</Alert> :
                groups.map((group, index) => 
                <Link key={index} to={`/groups/${group.id}`} className="link">
                    <GroupThumbnail name={group.name} teams={group.teams} />
                </Link>)
            }
        </Box>
    )
}

export default Groups