import { useEffect, useState } from "react";
import { addItem, deleteCity } from "../db/DBStore";
import dataHandlerUtil from "../utils/DataHandler";
import displayController from "../utils/Contains";
import { Navigate } from "react-router-dom";




const DisplayDetails = (data) => {


    const city = data.value;
    

    const [weatherData, setWeatherData] = useState(null);
    const [visible, setVisible] = useState(true);
    const [contain, setContain] = useState(false);
    const [notFound, setNotFound] = useState(false);
  
  
   
   
    useEffect(()=>{
      
        if(city) {
            
            handleWeatherSearch(city);
        };
        
     
      
    }, [city, contain]);

    const toggleVisible = () =>{
        setVisible(!visible);
    }


    const handleWeatherSearch = async() => {
       
        try {
            const data = await dataHandlerUtil(city);
            setWeatherData(data) ;
            handleContain();
       
        } catch (error) {
                console.error(error)
                setNotFound(true);
        }
    };

   
    
    const handleCityChange = (city, id, country) => {

        addItem(city, id, country);
        setContain(true);
       
       
    }


    const handleCityDelete = (city) => {
        deleteCity(city);
        setContain(false);

    }

    const handleContain = async() =>{
       
        const containControl = await displayController(city);
        setContain(containControl);
    }
 





 return (
    <>

    {!notFound ? (null) : (<Navigate to="/NotFound"></Navigate>)}
    
     {visible && weatherData ? 
                ( 
               
                <div className="weather-widget">
                    <h3>{weatherData.city}</h3><h5>{weatherData.country}</h5>
                    <div className="weather-info">
                        <img src={weatherData.iconUrl} alt="Weather Icon"/>
                        <p>Temperature: {weatherData.temperature} ºC</p>
                        <p>Minimun: {weatherData.tem_min} ºC</p>
                        <p>Maximun: {weatherData.tem_max} ºC</p>
                        <p>Conditions: {weatherData.conditions}</p> 
                    </div>
                </div>
                ) 
                : 
                (<button onClick={toggleVisible}>Show details</button>)}
 
    {weatherData && visible && contain  ? ( 
        
    
    (<div>
        <button onClick={() =>handleCityDelete (weatherData.city)}>Remove city</button>
        <button onClick={toggleVisible}>Hide</button>
    </div>)
    ) : ( null)}

    {weatherData && visible && !contain ? (    

        (<div>
            <button onClick={() =>handleCityChange (weatherData.city, weatherData.id, weatherData.country)}>Add city</button>
            <button onClick={toggleVisible}>Hide</button>
        </div>)
        ) : ( null)}

      
    
    </>
  
    
 );


}

export default DisplayDetails;