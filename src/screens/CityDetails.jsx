
import { Link } from 'react-router-dom';
import DisplayDetails from '../components/DisplayDetails';
import { useParams } from 'react-router';




const CityDetailsDisplay = () =>{

    const city = useParams()
    const mappedCity = city.cityName
    
 return (
 <>
 <Link to="/">Return</Link>
 <DisplayDetails value={mappedCity}></DisplayDetails>
 </>
 
 );
 

}


export default CityDetailsDisplay;