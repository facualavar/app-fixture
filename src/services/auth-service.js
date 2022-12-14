import apiFixture from "../api/fixture"

const login = async ({email, password}) => {
    let data
    let error = false

    await apiFixture.post(`/login`, {email, password})
        .then(
            (response) => data = response.data,
            (response) => error = response.response.data.message
        )
    return {data, error}
}

const register = async ({name, email, password}) => {
    let data
    let error = false

    await apiFixture.post(`/register`, {name, email, password})
        .then(
            (response) => data = response.data,
            (response) => error = response.response.data.message
        )
    return {data, error}
}

export {login, register}