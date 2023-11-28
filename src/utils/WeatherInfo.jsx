//Muestra la informacion de una determinada ciudad

const WeatherInfo = (data) => {
  const {
    city,
    temperature,
    tem_min,
    tem_max,
    conditions,
    iconUrl,
    id,
    country,
  } = data

  return data ? data : <p>Loading...</p>
}

export default WeatherInfo
