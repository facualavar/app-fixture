import Box from "../Box/Box"
import TeamThumbnail from "../Teamthumbnail/TeamThumbnail"
import "./game-thumbnail.css"

const GameThumbnail = ({team1Icon, team1Name, team2Icon, team2Name}) => {
    return (
        <Box className="game">
            <Box><img src={team1Icon}/></Box>
            <Box><span>{team1Name}</span></Box>
            <Box><input type="number"/></Box>

            <Box className="vs">VS</Box>

            <Box><input type="number"/></Box>
            <Box><img src={team2Icon}/></Box>
            <Box><span>{team2Name}</span></Box>
        </Box>
    )
}

export default GameThumbnail