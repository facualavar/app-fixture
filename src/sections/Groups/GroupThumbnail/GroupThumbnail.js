import Box from "../../../components/Box/Box"
import './group-thumbnail.css'

const GroupThumbnail = () => {
    return (
        <Box className="group-thumbnail">
            <h3>Grupo A</h3>
            <ul>
                <li><img src="https://flagcdn.com/w20/qa.webp"/> Equipo 1</li>
                <li><img src="https://flagcdn.com/w20/ec.webp"/> Equipo 2</li>
                <li><img src="https://flagcdn.com/w20/nl.webp"/> Equipo 3</li>
                <li><img src="https://flagcdn.com/w20/sn.webp"/> Equipo 4</li>
            </ul>
        </Box>
    )
}

export default GroupThumbnail