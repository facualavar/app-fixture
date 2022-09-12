import { Link } from "react-router-dom"
import Box from "../../../components/Box/Box"
import TeamThumbnail from "../../../components/Teamthumbnail/TeamThumbnail"
import './group-thumbnail.css'

const GroupThumbnail = ({name, teams}) => {
    return (
        <Box className="group-thumbnail">
            <h3>{name}</h3>
            <ul>
                {teams.map((team, index) =>
                <li key={index}>
                    <TeamThumbnail flag={team.icon} name={team.name}/>
                </li>)}
            </ul>
        </Box>
    )
}

export default GroupThumbnail