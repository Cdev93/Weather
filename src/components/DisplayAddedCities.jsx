import { useEffect, useState } from "react";
import { deleteCity} from "../db/DBStore"
import { Link } from "react-router-dom";
import getStoredData from "../utils/getDataDB";
import dataHandlerUtil from "../utils/DataHandler";








function DisplayCities() {



    const [cities, setCities] = useState([]);
    const [weatherData, setWeatherData] = useState([]);
    
  
    useEffect(()=>{
       

        getStoredData().then((data)=>{
            setCities(data)
            console.log(data.length)
            });
        
    
    },[])


    useEffect(()=>{
      
        handleWeatherSearch();
   
    }, [cities])
          






    const handleWeatherSearch = async() => {
       
       
       
        if(cities.length!=0){
            cities.map(async(c)=>{
           
            const data = await dataHandlerUtil(c)
            if(!weatherData.some(item=>item.name===data.name)){
            setWeatherData((prevData)=>[...prevData, data])}
        })}
    
        
   
        };
      



    
    //actualiza y controla en función de los cambios
    const handleChanges = (city) => {
        deleteCity(city);
      
    };
  

    return  (
        <>


          
           
          {weatherData ? (
           <div className="added-cities-cont">
                
                    <ul className="list-added">
                    
                    {
                    weatherData.map((city) => {

                    return (
                      
                    
                    <li key={city.id}>
                        <div className="links-containers">
                             {city.city}<button onClick={() => handleChanges(city.city)} className="delete-btn-added">X</button>
                        </div>
                        <p>{city.country}</p>
                      
                        <img src={city.iconUrl}></img>
                        
                    </li>
                  
              
                )
                })
       
            }
                    </ul>
      
                    
                {( cities.length == 0) ? (
                    <div>
                        <p>No cities added yet</p>
                    </div>) :
                    (null)}

             
            </div>):(null)} 
        </>
    );



}


export {DisplayCities}

