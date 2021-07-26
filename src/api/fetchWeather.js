import axios from 'axios'

const URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = 'abd064845439eb6a9cc5679f78ad55bb'

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
