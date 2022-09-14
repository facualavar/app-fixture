import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import alertContext from "../../contexts/alertContext";
import GroupService from "../../services/group-service";
import Box from "../../components/Box/Box";
import Button from "../../components/Button/Button";
import FormComponent from "../../components/Form/Form";
import Games from "./Games/Games";
import "./group.css"

const Group = () => {
    const groupService = GroupService()
    const alert = useContext(alertContext);
    const { groupId } = useParams();

    const [group, setGroup] = useState({})

    useEffect(() => {
        const getGroup = async () => {
            let {data, error} = await groupService.fetchGroup(groupId)

            if (!error) {
                setGroup(data)
                alert.hideAlertError()
            } else {
                alert.showAlertError(error)
            }
        }

        getGroup()
    }, [groupId])

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

        if(values.goals0 < 0) errors.goals1 = "Invalid number"
        if(values.goals1 < 0) errors.goals1 = "Invalid number"
        if(values.goals2 < 0) errors.goals2 = "Invalid number"
        if(values.goals3 < 0) errors.goals3 = "Invalid number"
        if(values.goals4 < 0) errors.goals4 = "Invalid number"
        if(values.goals5 < 0) errors.goals5 = "Invalid number"
        if(values.goals6 < 0) errors.goals6 = "Invalid number"
        if(values.goals7 < 0) errors.goals7 = "Invalid number"
        if(values.goals8 < 0) errors.goals8 = "Invalid number"
        if(values.goals9 < 0) errors.goals9 = "Invalid number"
        if(values.goals10 < 0) errors.goals10 = "Invalid number"
        if(values.goals11 < 0) errors.goals11 = "Invalid number"

        return errors
    }

    const handleClickSaveResults = async (results) => {
        let goals = Object.values(results)
        let {data, error} = await groupService.postResults(groupId, goals)

        // error ? setError(error) : setGroup(data)
        // setIsLoading(false)

        groupId = groupId
    }

    return (
        <Box padding="20px">
            {
                group.id ?
                <FormComponent
                    initialValues={initialValues}
                    validate={validateGoals}
                    onSubmit={handleClickSaveResults}
                >
                    <h2>{group.name}</h2>
                    <Games groupId={groupId} />
                    <Box display="flex" justifyContent="center">
                        <Button type="submit">Guardar Resultados</Button>
                    </Box>
                </FormComponent>
                : null
            }
        </Box>
    )
}

export default Group