//extrae la informacion de la API en base a una ciudad

const getWeatherData = async(city) => {


    const apiKey = import.meta.env.VITE_API_KEY;
    const baseUrl = import.meta.env.VITE_BASE_URL_API;
    const baseUrl2 = import.meta.env.VITE_BASE_URL_API2;

      const response = await fetch(`${baseUrl}?q=${city}&appid=${apiKey}&units=metric`);
      const response2 = await fetch(`${baseUrl2}?q=${city}&mode=json&appid=${apiKey}&lang=es&units=metric`);
   
      if(!response.ok && !response2.ok) { throw new Error (`No se han podido obtener los datos de ${city}`)}
      
      else  {
        const weatherData = await response.json()
        const weatherData2 = await response2.json()
      
        return {weatherData, weatherData2};
    };
     
    
    
      

}


export default getWeatherData;
