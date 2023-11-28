import WeatherInfo from './WeatherInfo'
import getWeatherData from './getWeatherData'
import mapWeatherData from './DataMapper'

const dataHandlerUtil = async (city) => {
  return WeatherInfo(mapWeatherData(await getWeatherData(city)))
}

export default dataHandlerUtil
