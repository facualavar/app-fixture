import Box from "../../../components/Box/Box"
import './group-thumbnail.css'

const GroupThumbnail = ({name, teams}) => {
    return (
        <Box className="group-thumbnail">
            <h3>{name}</h3>
            <ul>
                {teams.map((team, index) =>
                <li key={index}>
                    <Box display="flex" margin="auto">
                        <Box><img src={team.icon}/></Box>&nbsp;
                        <Box><span>{team.name}</span></Box>
                    </Box>
                </li>)}
            </ul>
        </Box>
    )
}

export default GroupThumbnail