import Box from "../Box/Box"
import InputGoal from "../InputGoal/InputGoal"
import "./game-thumbnail.css"

const GameThumbnail = ({gameNumber, team1Icon, team1Name, team2Icon, team2Name}) => {
    const inputNumber1 = gameNumber * 2
    const inputNumber2 = gameNumber * 2 + 1

    return (
        <Box className="game">
            <Box><img src={team1Icon}/></Box>
            <Box><span>{team1Name}</span></Box>
            <Box><InputGoal name={`goals${inputNumber1}`}/></Box>

            <Box className="vs">VS</Box>

            <Box><InputGoal name={`goals${inputNumber2}`}/></Box>
            <Box><img src={team2Icon}/></Box>
            <Box><span>{team2Name}</span></Box>
        </Box>
    )
}

export default GameThumbnail