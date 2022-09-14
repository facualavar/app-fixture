import { useContext, useEffect, useState } from "react"
import alertContext from "../../contexts/alertContext"
import GroupService from "../../services/group-service"
import Box from "../Box/Box"
import Button from "../Button/Button"
import Form from "../Form/Form"
import GameThumbnail from "../GameThumbnail/GameThumbnail"
import "./group-results.css"

const GroupResults = ({id}) => {
    const groupService = GroupService()
    const alert = useContext(alertContext)

    const [games, setGames] = useState([])

    useEffect(() => {
        const getGroup = async () => {
            let {data, error} = await groupService.fetchGames(id)

            if (!error) {
                setGames(data)
                alert.hideAlertError()
            } else {
                alert.showAlertError(error)
            }
        }

        getGroup()
    }, [id])

    const initialValues = {
        goals0: "",
        goals1: "",
        goals2: "",
        goals3: "",
        goals4: "",
        goals5: "",
        goals6: "",
        goals7: "",
        goals8: "",
        goals9: "",
        goals10: "",
        goals11: "",
    }

    const validateGoals = (values) => {
        const errors = {}
        const qtyTeams = 12;

        for (let i = 0; i < qtyTeams; i++) {
            if(values[`goals${i}`] < 0) errors[`goals${i}`] = "Invalid number"
        }

        return errors
    }

    const handleClickSaveResults = async (results) => {
        let goals = Object.values(results)
        let {data, error} = await groupService.postResults(id, goals)

        // error ? setError(error) : setGroup(data)
        // setIsLoading(false)
    }

    return (
        <Box className="container">
            {
                games.length ?
                <Form
                    initialValues={initialValues}
                    validate={validateGoals}
                    onSubmit={handleClickSaveResults}
                >
                    <Box>
                        {games.length ?
                        games.map((game, index) => {
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
                        })
                        : null}
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Button type="submit">Guardar Resultados</Button>
                    </Box>
                </Form>
                : null
            }
        </Box>
    )
}

export default GroupResults