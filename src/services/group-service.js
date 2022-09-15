import apiFixture from "../api/fixture"
import useStorage from "../hooks/useStorage"

const GroupService = () =>{
    const versionApi = "/v1"
    const storage = useStorage()

    const token = storage.get("access_token")

    apiFixture.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    async function fetchGroups() {
        let data
        let error = false

        await apiFixture.get(`${versionApi}/groups`)
            .then(
                (response) => data = response.data,
                (response) => error = response.response.data.message
            )
        return {data, error}
    }

    const fetchGroup = async (id) => {
        let data
        let error = false

        await apiFixture.get(`${versionApi}/groups/${id}`)
            .then(
                (response) => data = response.data,
                (response) => error = response.response.data.message
            )
        return {data, error}
    }

    const fetchResults = async (id) => {
        let data
        let error = false

        await apiFixture.get(`${versionApi}/groups/${id}/results`)
            .then(
                (response) => data = response.data,
                (response) => error = response.response.data.message
            )
        return {data, error}
    }

    const postResults = async (id, data) => {
        let error = false

        await apiFixture.post(`${versionApi}/groups/${id}/results`, data)
            .then(
                (response) => data = response.data,
                (response) => error = response.response.data.message
            )
        return {data, error}
    }

    return {fetchGroups, fetchGroup, fetchResults, postResults}
}



export default GroupService