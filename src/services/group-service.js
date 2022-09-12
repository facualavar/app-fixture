import apiFixture from "../api/fixture"

const getGroups = async () => {
    let data
    let error = false

    await apiFixture.get(`/groups`)
        .then(
            (response) => data = response.data,
            (response) => error = response.response.data.message
        )
    return {data, error}
}

export {getGroups}