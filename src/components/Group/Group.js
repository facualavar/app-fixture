import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import alertContext from "../../contexts/alertContext"
import useAuth from "../../hooks/useAuth"
import GroupService from "../../services/group-service"
import Box from "../Box/Box"
import Button from "../Button/Button"
import Table from "../Table/Table"
import TeamThumbnail from "../Teamthumbnail/TeamThumbnail"
import "./group.css"

const Group = ({id}) => {
    const auth = useAuth();
    const groupService = GroupService()
    const alert = useContext(alertContext)
    const navigate = useNavigate()

    if (!auth.user) {
        navigate('/login')
    }

    const [group, setGroup] = useState({})

    useEffect(() => {
        const getGroup = async () => {
            let {data, error} = await groupService.fetchGroup(id)

            if (!error) {
                setGroup(data)
                alert.hideAlertError()
            } else {
                alert.showAlertError(error)
            }
        }

        getGroup()
    }, [id])

    return (
        <Box>
            {group.id ?
            <Box className="group-grid">
                <Box alignSelf="center">
                    <h1 className="title">{group.name}</h1>
                </Box>
                <Box>
                    <Box marginBottom="10px">
                        <Table>
                            <thead>
                                <tr>
                                    <th>Equipo</th>
                                    <th>PJ</th>
                                    <th>G</th>
                                    <th>E</th>
                                    <th>P</th>
                                    <th>GF</th>
                                    <th>GC</th>
                                    <th>DF</th>
                                    <th>PTS</th>
                                </tr>
                            </thead>
                            <tbody>
                            {group.teams.map((team, index) => (
                                <tr key={index}>
                                    <td>
                                        <Box color="#fff" fontWeight="700" padding="5px">
                                            <TeamThumbnail name={team.name} flag={team.icon} />
                                        </Box>
                                    </td>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>3</td>
                                    <td>2</td>
                                    <td>+1</td>
                                    <td>4</td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                    </Box>
                    <Link to="results"><Button>Editar Resultados</Button></Link>
                </Box>
            </Box>
            : null}
        </Box>
    )
}

export default Group