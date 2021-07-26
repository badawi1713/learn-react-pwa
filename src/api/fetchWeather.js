import axios from 'axios'

const URL = process.env.REACT_APP_BASEURL
const API_KEY = process.env.REACT_APP_API_KEY

export const fetchWeather = async query => {
  try {
    const response = await axios.get(URL, {
      params: { q: query, units: 'metric', APPID: API_KEY }
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}
