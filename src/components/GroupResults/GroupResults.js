import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
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
    const navigate = useNavigate()

    const [results, setResults] = useState([])

    useEffect(() => {
        const getGroup = async () => {
            let {data, error} = await groupService.fetchResults(id)

            if (!error) {
                setResults(data)
                alert.hideAlertError()
            } else {
                alert.showAlertError(error)
            }
        }

        getGroup()
    }, [id])

    const initialValues = () => {
        const values = {}

        results.map((result) => {
            let gameId = result.game_id

            values[`${gameId}`] = {
                goals_team_1: result.goals_team_1,
                goals_team_2: result.goals_team_2,
            }
        })

        return values
    }

    const validateGoals = (values) => {
        const errors = {}

        results.map((result) => {
            let gameId = result.game_id

            if (values[`${gameId}`]["goals_team_1"] < 0) {
                errors[`${gameId}`] = {
                    goals_team_1: "Invalid number"
                }
            }

            if (values[`${gameId}`]["goals_team_2"] < 0) {
                errors[`${gameId}`] = {
                    goals_team_2: "Invalid number"
                }
            }
        })

        return errors
    }

    const handleClickSaveResults = async (values) => {

        let {data, error} = await groupService.postResults(id, values)

        if (!error) {
            alert.hideAlertError()
            navigate(`/groups/${id}`)
        } else {
            alert.showAlertError(error)
        }
    }

    return (
        <Box className="container">
            {Array.isArray(results) && results.length > 0 ?
            <Form
                enableReinitialize={true}
                initialValues={initialValues()}
                validate={validateGoals}
                onSubmit={handleClickSaveResults}
            >
                <Box>
                    {results.map((result, index) => {
                        return (
                            <Box key={index} marginBottom="20px">
                                {(index % 2 == 0) ? <h3 className="title">{result.matchday}</h3> : null}
                                <GameThumbnail
                                    gameId={result.game_id}
                                    iconTeam1={result.flag_team_1}
                                    nameTeam1={result.name_team_1}
                                    goalsTeam1={result.goals_team_1}
                                    iconTeam2={result.flag_team_2}
                                    nameTeam2={result.name_team_2}
                                    goalsTeam2={result.goals_team_2}
                                />
                            </Box>
                        )
                    })}
                </Box>
                <Box display="flex" justifyContent="center">
                    <Button type="submit">Guardar Resultados</Button>
                </Box>
            </Form>
            : null}
        </Box>
    )
}

export default GroupResults