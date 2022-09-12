import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Box from "../../components/Box/Box";
import Alert from "../../components/Alert/Alert";
import { fetchGroup } from "../../services/group-service";
import Games from "./Games/Games";
import "./group.css"

const Group = () => {
    let { groupId } = useParams();

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    const [group, setGroup] = useState({})

    useEffect(() => {
        setIsLoading(true)
        getGroup()
    }, [])

    useEffect(() => {
        setIsLoading(true)
        getGroup()
    }, [groupId])

    const getGroup = async () => {
        let {data, error} = await fetchGroup(groupId)

        error ? setError(error) : setGroup(data)
        setIsLoading(false)
    }

    return (
        <Box padding="20px">
            {
                isLoading ? <Alert color="yellow">Cargando ...</Alert>:
                error ? <Alert color="red">Error</Alert> :
                <Box>
                    <h2>{group.name}</h2>
                    <Games groupId={groupId}></Games>
                </Box>
            }
        </Box>
    )
}

export default Group