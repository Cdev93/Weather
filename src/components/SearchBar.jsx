//Barra de búsqueda de una ciudad por su nombre

import { useEffect, useState } from "react";

import dataHandlerUtil from "../utils/DataHandler";


const SearchBar = (props) => {

    const [city, setCity] = useState('');
    const [inputValue, setInputValue] =useState('');
    const [suggestions, setSuggestions] =useState([]);
    const [delay, setDelay] = useState(50);


  
    useEffect(()=>{

        const fetchLocations = async() =>{
            setSuggestions([]);
    
        try {
            const data = await dataHandlerUtil(inputValue);
            console.log(data)
            if(data) {

                const locations = data.city
                
                setSuggestions(locations);
    

            }
        
            
        } catch (error) {
           console.error('Error, no suggestions found', error) 
        }
    };



    if(inputValue!= ''){
      const timeoutReset = setTimeout(()=>{
            fetchLocations();
        }, delay);
        return () =>clearTimeout(timeoutReset);
      
    } else {
        setSuggestions([]);
    }


    },[inputValue, delay]);
    






    useEffect(()=>{
      
    if(props.detailsControl) {
        props.setCitySearch(props.detailsControl);
        }

    }, [props.detailsControl]);

    
    
    useEffect(()=>{
        handleWeatherSearch();
      
    },[props.citySearch])



  
    const handleVisibility = () =>{
    props.setVisible(true);
    }


    //controla el valor de 'city'
    const handleCityChange = (event) =>{
        
        const inputBar = event.target.value
       
        setCity(inputBar);
        setInputValue(inputBar)
       
    };

    const handleWeatherSearch = async() => {
       
       props.setCitySearch(city);
      
       setCity('');
       setSuggestions([]);
    };
 
    const handleContentSearch = () =>{
       alert('Please enter a search term')
    }

    const handleSuggestions = async(city) =>{
        
        props.setCitySearch(city);
        setSuggestions([]);
        setCity('');
       
    }
    
    return (
        <>
        <div className="search-bar-container">
            <div className="i-s-cont">
            {city ? (<button onClick={()=>handleWeatherSearch() && handleVisibility()} className="search-btn"><img src={`src/assets/weather_icons/Search.png`}></img></button> ) 
            : (<button className="search-btn" onClick={()=>handleContentSearch()}><img src={`src/assets/weather_icons/Search.png`} alt='sbtn'></img></button>)}
            <input
            
                type="text"
                placeholder="Search city..."
                value={city}
                onChange={handleCityChange}
                className="input-container-sb"
            >
            </input>
            {suggestions!='' ? (<button className="sugg-btn" onClick={()=>handleSuggestions(suggestions)  && handleVisibility()}>{suggestions}</button>) : (null)}
            </div>
           
        </div>
      
    </>
    )
}


export default SearchBar;