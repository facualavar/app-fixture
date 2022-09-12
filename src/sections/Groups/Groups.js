import Box from "../../components/Box/Box"
import GroupThumbnail from "./GroupThumbnail/GroupThumbnail"
import "./groups.css"
import { useEffect, useState } from "react"
import { getGroups } from "../../services/group-service"

const Groups = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    const [groups, setGroups] = useState([])

    useEffect(() => {
        setIsLoading(true)
        fetchGroups()
    }, [])

    const fetchGroups = async () => {
        let {data, error} = await getGroups()

        error ? setError(error) : setGroups(data)
        setIsLoading(false)
    }

    return (
        <Box className="groups">
            {
                isLoading ? <Box>Cargando ...</Box>:
                error ? <Box>Error</Box> :
                groups.map((group, index) => <GroupThumbnail key={index} name={group.name} teams={group.teams} />)
            }
        </Box>
    )
}

export default Groups