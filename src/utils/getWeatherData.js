//extrae la informacion de la API en base a una ciudad

const getWeatherData = async(city) => {


    const apiKey = import.meta.env.VITE_API_KEY;
    const baseUrl = import.meta.env.VITE_BASE_URL_API;

      const response = await fetch(`${baseUrl}?q=${city}&appid=${apiKey}&units=metric`);
      
     
      if(!response.ok) { throw new Error (`No se han podido obtener los datos de ${city}`)}
      
      else  {
        const weatherData = await response.json()
       
       
        return (weatherData);
    };
     
    
    
      

}


export default getWeatherData;
