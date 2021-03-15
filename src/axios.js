import axios from 'axios'


const instance = axios.create(
    {
        baseURL: 'https://new-tinder-clone-backend.herokuapp.com'
    }
)

export default instance