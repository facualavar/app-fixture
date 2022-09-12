import Box from "../Box/Box"

const TeamThumbnail = ({name, flag}) => {
    return (
        <Box display="flex" margin="auto">
            <Box><img src={flag}/></Box>&nbsp;
            <Box><span>{name}</span></Box>
        </Box>
    )
}

export default TeamThumbnail