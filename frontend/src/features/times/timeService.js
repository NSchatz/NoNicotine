import axios from 'axios'

const API_URL = '/api/times'

const createTime = async (timeData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, timeData, config)

    return response.data
}

const updateTime = async (timeData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    console.log(timeData)
    const response = await axios.put(API_URL + '/' + timeData.object._id, timeData.object, config)

    return response.data
}


const getTime = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)

    return response.data
}

const timeService = {
    createTime,
    getTime,
    updateTime
}

export default timeService