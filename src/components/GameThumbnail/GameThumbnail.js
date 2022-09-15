import Box from "../Box/Box"
import InputGoal from "../InputGoal/InputGoal"
import TeamThumbnail from "../Teamthumbnail/TeamThumbnail"
import "./game-thumbnail.css"

const GameThumbnail = ({gameNumber, iconTeam1, nameTeam1, goalsTeam1, Iconteam2, nameTeam2, goalsTeam2}) => {
    const inputNumber1 = gameNumber * 2
    const inputNumber2 = gameNumber * 2 + 1

    return (
        <Box className="game">
            <Box>
                <TeamThumbnail name={nameTeam1} flag={iconTeam1}/>
            </Box>
            <Box display="flex" justifyContent="space-between">
                <Box><InputGoal name={`goals${inputNumber1}`} value={goalsTeam1}/></Box>
                <Box className="vs">VS</Box>
                <Box><InputGoal name={`goals${inputNumber2}`} value={goalsTeam2}/></Box>
            </Box>
            <Box>
                <TeamThumbnail name={nameTeam2} flag={Iconteam2}/>
            </Box>
        </Box>
    )
}

export default GameThumbnail