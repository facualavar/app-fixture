import axios from 'axios'

const host = "https://git.heroku.com/fixture-api-rest.git"

const apiFixture = axios.create({
    baseURL: host + "/api"
})

export default apiFixture