import { useParams } from "react-router-dom"
import GroupResults from "../../components/GroupResults/GroupResults"
import "./group-results-section.css"

const GroupResultsSection = () => {
    const { groupId } = useParams();

    return (
        <GroupResults id={groupId} />
    )
}

export default GroupResultsSection