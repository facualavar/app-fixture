import { useContext, useEffect, useState } from "react";
import alertContext from "../../../contexts/alertContext";
import GroupService from "../../../services/group-service";
import Box from "../../../components/Box/Box";
import GameThumbnail from "../../../components/GameThumbnail/GameThumbnail";
import "./games.css"

const Games = ({groupId}) => {
    const groupService = GroupService()
    const alert = useContext(alertContext);

    const [games, setGames] = useState([])

    useEffect(() => {
        const getGames = async () => {
            let {data, error} = await groupService.fetchGames(groupId)

            if (!error) {
                setGames(data)
                alert.hideAlertError()
            } else {
                alert.showAlertError(error)
            }
        }

        getGames()
    }, [groupId])

    return (
        <Box padding="20px">
            {
                games.length ?
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
                : null
            }
        </Box>
    )
}

export default Games