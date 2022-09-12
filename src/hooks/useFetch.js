import apiFixture from "../api/fixture"

const useFetch = (url, method, params = {}, body = {}, headers = {}) => {

    const fetchData = async () => {
        let data
        let error = false

        await apiFixture.request(
            { url, method, headers, params, body },
            (response) => data = response.data,
            (response) => error = response.response.data.message
        )

        return {data, error}
    }

    return fetchData()
}

export default useFetch