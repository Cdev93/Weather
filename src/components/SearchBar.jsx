//Barra de búsqueda de una ciudad por su nombre
import { Link } from "react-router-dom";
import { useState } from "react";


const SearchBar = () => {

    const [city, setCity] = useState('');

    //controla el valor de 'city'
    const handleCityChange = (event) =>{

        setCity(event.target.value);


    };


    return (

        <div className="search-bar-container">
            <div className="i-s-cont">
            <input
                type="text"
                placeholder="Search city..."
                value={city}
                onChange={handleCityChange}
                className="input-container-sb"
            >
            </input>

            {city ? (<Link to={`/CityDetails/${city}`}><button className="search-btn">Search</button></Link> ) : (null)}

            </div>
           
        </div>


    )
}


export default SearchBar;