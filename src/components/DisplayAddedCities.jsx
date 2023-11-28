import { useEffect, useState } from 'react'
import { deleteCity, getAddedCities } from '../db/DBStore'
import dataHandlerUtil from '../utils/DataHandler'

function DisplayCities(props) {
  const [weatherData, setWeatherData] = useState([])
  const [controlLoad, setControlLoad] = useState(false)

  useEffect(() => {
    handleWeatherSearch()
  }, [props.updateControl])

  //realiza las peticiones a la api en función de las ciudades almacenadas
  const handleWeatherSearch = async () => {
    const cities = await getAddedCities()
    const mappedCities = cities.map((city) => {
      return city.name
    })
    let dataMapped = []
    for (let i = 0; i < mappedCities.length; i++) {
      const data = await dataHandlerUtil(mappedCities[i])
      dataMapped.push(data)
    }

    setWeatherData(dataMapped)
    setControlLoad(true)
  }

  //actualiza y controla en función de los cambios
  const handleChanges = async (id, city) => {
    await deleteCity(id)

    if (
      props.visible &&
      props.controlCity.toLowerCase() == city.toLowerCase()
    ) {
      handleDisplayDetails(city)
      props.setControlBtn(!props.controlBtn)
    } else if (props.controlCity.toLowerCase() == city.toLowerCase()) {
      props.setControlBtn(!props.controlBtn)
    }
    props.setUpdateControl(!props.updateControl)
  }

  const handleDisplayDetails = (city) => {
    props.setCitySearch(city)
    props.setVisible(true)
  }

  return (
    <>
      {weatherData && weatherData.length != 0 ? (
        <div className="added-cities-cont">
          <h2>Saved Cities</h2>
          <div className="grid-container">
            {weatherData.map((city) => {
              return (
                <div className="grid-column" key={city.id}>
                  <button
                    onClick={() => handleDisplayDetails(city.city)}
                    className="widget-container"
                  >
                    <button
                      onClick={(e) =>
                        handleChanges(city.id, city.city) && e.stopPropagation()
                      }
                      id="delete-btn-added"
                    >
                      <img
                        src={`src/assets/weather_icons/eliminar.png`}
                        alt="delete-icon"
                      ></img>
                    </button>
                    <p id="cityName">
                      {city.city}
                      <span>{city.country}</span>
                    </p>
                    <img src={`src/assets/weather_icons/${city.iconUrl}`}></img>
                    <p id="cityConditions">{city.conditions}</p>
                    <div className="widget-bottom">
                      <p>{city.time}</p>
                      <p>
                        {city.tem_min}º{city.tem_max}º
                      </p>
                    </div>
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      ) : !controlLoad ? (
        <div data-testid="pw" className="loading-cont">
          <div className="loading"></div>
        </div>
      ) : controlLoad && weatherData.length == 0 ? (
        <div className="no-added">
          <p>No cities added yet</p>
        </div>
      ) : null}
    </>
  )
}

export { DisplayCities }
