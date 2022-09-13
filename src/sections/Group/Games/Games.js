import { useEffect, useState } from "react";
import Alert from "../../../components/Alert/Alert";
import Box from "../../../components/Box/Box";
import GameThumbnail from "../../../components/GameThumbnail/GameThumbnail";
import TeamThumbnail from "../../../components/Teamthumbnail/TeamThumbnail";
import { fetchGames } from "../../../services/group-service";
import "./games.css"

const Games = ({groupId}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    const [games, setGames] = useState([])

    useEffect(() => {
        setIsLoading(true)
        getGames()
    }, [])

    const getGames = async () => {
        let {data, error} = await fetchGames(groupId)

        error ? setError(error) : setGames(data)
        setIsLoading(false)
    }

    return (
        <Box padding="20px">
            {
                isLoading ? <Alert color="yellow">Cargando ...</Alert>:
                error ? <Alert color="red">Error</Alert> :
                <Box className="games">
                    {games.map((game, index) => {
                        return (
                            <Box key={index} marginBottom="20px">
                                {(index % 2 == 0) ? <h3 className="title">{game.matchday.name}</h3> : null}
                                <GameThumbnail
                                    gameNumber={index}
                                    team1Icon={game.team1.icon}
                                    team1Name={game.team1.name}
                                    team2Icon={game.team2.icon}
                                    team2Name={game.team2.name}
                                />
                            </Box>
                        )
                    })}
                </Box>
            }
        </Box>
    )
}

export default Games