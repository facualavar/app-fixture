import apiFixture from "../api/fixture"

const GroupService = () =>{
    const versionApi = "/v1"

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

    const fetchGames = async (id) => {
        let data
        let error = false

        await apiFixture.get(`${versionApi}/groups/${id}/games`)
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

    return {fetchGroups, fetchGroup, fetchGames, postResults}
}



export default GroupService