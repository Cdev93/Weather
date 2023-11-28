import { useEffect, useState } from 'react'
import { addCities, deleteCity, getAddedCities } from '../db/DBStore'
import dataHandlerUtil from '../utils/DataHandler'
import displayController from '../utils/Contains'
import MyComponent from '../utils/carousel'

const DisplayDetails = (props) => {
  const city = props.citySearch

  const [weatherData, setWeatherData] = useState(null)
  const [contain, setContain] = useState(false)
  const [notFound, setNotFound] = useState('')

  useEffect(() => {
    if (city) {
      handleWeatherSearch(city)
    }
  }, [city, contain])

  const handleWeatherSearch = async () => {
    try {
      setNotFound('')
      const data = await dataHandlerUtil(city)
      setWeatherData(data)
      props.setControlCity(data.city)
      const controlContain = await displayController(data.city)
      setContain(controlContain)
      props.setControlBtn(controlContain)
    } catch (error) {
      console.error(error)
      setNotFound(city)
    }
  }

  const handleCityChange = (city, id, country) => {
    addCities(city, id, country)
    setContain(true)
    props.setControlBtn(true)
    getAddedCities()
    props.setUpdateControl(!props.updateControl)
  }

  const handleCityDelete = async (city) => {
    setContain(!contain)
    await deleteCity(city)
    props.setControlBtn(false)
    props.setUpdateControl(!props.updateControl)
  }

  const handleClear = () => {
    setWeatherData(null)
    props.setVisible(false)
  }

  return (
    <>
      {weatherData && props.visible && notFound == '' ? (
        <div className="weather-details-container">
          <div className="h2-h5-cont">
            <h2>Weather in {weatherData.city}</h2>
            <h5>{weatherData.country}</h5>
          </div>

          <div className="weather-info">
            <section className="f-section">
              <div className="details-c1">
                <img
                  src={`src/assets/weather_icons/${weatherData.iconUrl}`}
                  alt="Weather Icon"
                />
                <p>{weatherData.temperature}ºC</p>
              </div>

              <div className="details-c2">
                <p>
                  <span>{weatherData.weekDay}</span>,
                  <span> {weatherData.time}</span>
                </p>
                <p>{weatherData.conditions}</p>
              </div>
            </section>
            <section className="s-section">
              <MyComponent city={weatherData}></MyComponent>
            </section>
          </div>
          <div className="weather-info2">
            <div className="detail-column1">
              <div className="detail-div1">
                <p>
                  <span>Pressure</span>
                  <span>{weatherData.pressure}hcpa</span>
                </p>
                <p>
                  <span>Precipitation</span>
                  {weatherData.precipitations == 'none' ? (
                    <span>{weatherData.precipitations}</span>
                  ) : (
                    <span>{weatherData.precipitations}mm</span>
                  )}
                </p>
              </div>
              <div className="detail-div1">
                <p>
                  <span>Humidity</span>
                  <span>{weatherData.humidity}</span>
                </p>
                <p>
                  <span>Wind</span>
                  <span>{weatherData.windSpeed}</span>
                </p>
              </div>
            </div>
            <div className="detail-column1">
              <div className="detail-div1">
                <p>
                  <span>Sunrise</span>
                  <span>{weatherData.sunrise}</span>
                </p>
                <p className="p-img">
                  <img
                    src={`src/assets/weather_icons/lucide_sunrise.png`}
                    alt="sunrise-icon"
                  ></img>
                </p>
              </div>
              <div className="detail-div1">
                <p>
                  <span>Sunset</span>
                  <span>{weatherData.sunset}</span>
                </p>
                <p className="p-img">
                  <img
                    src={`src/assets/weather_icons/lucide_sunset.png`}
                    alt="sunset-icon"
                  ></img>
                </p>
              </div>
            </div>
          </div>
          <button className="clear-btn" onClick={() => handleClear()}>
            <img
              src={`src/assets/weather_icons/borrar.png`}
              alt="clear-icon"
            ></img>
          </button>
          {props.visible && props.controlBtn ? (
            <button
              className="remove-btn"
              onClick={() => handleCityDelete(weatherData.id)}
            >
              Remove city
            </button>
          ) : null}

          {props.visible && !props.controlBtn && !contain ? (
            <button
              className="add-btn"
              onClick={() =>
                handleCityChange(
                  weatherData.city,
                  weatherData.id,
                  weatherData.country,
                )
              }
            >
              Add city
            </button>
          ) : null}
        </div>
      ) : !weatherData && notFound == '' ? (
        <div className="b-details-cont"></div>
      ) : (
        <div className="not-found">
          <img src="src/assets/weather_icons/mujer.png" alt="not-found-img" />
          <p>Not found "{notFound}"</p>
        </div>
      )}
    </>
  )
}

export default DisplayDetails
