import axios from 'axios'

const host = "http://localhost"

const apiFixture = axios.create({
    baseURL: host + "/api"
})

export default apiFixture