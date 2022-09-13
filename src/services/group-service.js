import apiFixture from "../api/fixture"

const fetchGroups = async () => {
    let data
    let error = false

    await apiFixture.get(`/groups`)
        .then(
            (response) => data = response.data,
            (response) => error = response.response.data.message
        )
    return {data, error}
}

const fetchGroup = async (id) => {
    let data
    let error = false

    await apiFixture.get(`/groups/${id}`)
        .then(
            (response) => data = response.data,
            (response) => error = response.response.data.message
        )
    return {data, error}
}

const fetchGames = async (id) => {
    let data
    let error = false

    await apiFixture.get(`/groups/${id}/games`)
        .then(
            (response) => data = response.data,
            (response) => error = response.response.data.message
        )
    return {data, error}
}

const postResults = async (id, data) => {
    let error = false

    await apiFixture.post(`/groups/${id}/results`, data)
        .then(
            (response) => data = response.data,
            (response) => error = response.response.data.message
        )
    return {data, error}
}

export {fetchGroups, fetchGroup, fetchGames, postResults}