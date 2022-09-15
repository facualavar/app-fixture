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

        if (!error) {
            alert.hideAlertError()
            navigate(`/groups/${id}`)
        } else {
            alert.showAlertError(error)
        }
    }

    return (
        <Box className="container">
            {Array.isArray(results) && results.length ?
            <Form
                initialValues={initialValues}
                validate={validateGoals}
                onSubmit={handleClickSaveResults}
            >
                <Box>
                    {results.map((result, index) => {
                        return (
                            <Box key={index} marginBottom="20px">
                                {(index % 2 == 0) ? <h3 className="title">{result.matchday}</h3> : null}
                                <GameThumbnail
                                    gameNumber={index}
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