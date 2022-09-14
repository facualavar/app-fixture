import Box from "../Box/Box"
import InputGoal from "../InputGoal/InputGoal"
import TeamThumbnail from "../Teamthumbnail/TeamThumbnail"
import "./game-thumbnail.css"

const GameThumbnail = ({gameNumber, team1Icon, team1Name, team2Icon, team2Name}) => {
    const inputNumber1 = gameNumber * 2
    const inputNumber2 = gameNumber * 2 + 1

    return (
        <Box className="game">
            <Box>
                <TeamThumbnail name={team1Name} flag={team1Icon}/>
            </Box>
            <Box display="flex" justifyContent="space-between">
                <Box><InputGoal name={`goals${inputNumber1}`}/></Box>
                <Box className="vs">VS</Box>
                <Box><InputGoal name={`goals${inputNumber2}`}/></Box>
            </Box>
            <Box>
                <TeamThumbnail name={team2Name} flag={team2Icon}/>
            </Box>
        </Box>
    )
}

export default GameThumbnail