//mapea los datos de la API

const mapWeatherData = (data) => {


    if ( !data || !data.main || !data.weather || !data.sys) return (
       console.warn('Error no data')
    )
       
    const city        = data.name;
    const temperature = data.main.temp;
    const tem_min     = data.main.temp_min;
    const tem_max     = data.main.temp_max;
    const conditions  = data.weather[0].description;
    const iconUrl     = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    const id          = data.id;
    const country     = data.sys.country

    const mappedData = {

        city,
        temperature,
        conditions,
        iconUrl,
        tem_max,
        tem_min,
        id,
        country,

    };

  

    return mappedData;

}

export default mapWeatherData;