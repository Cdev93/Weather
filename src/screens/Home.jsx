
import SearchBar from '../components/SearchBar';
import {DisplayCities} from '../components/DisplayAddedCities';






const Home = () =>{

   
 return (
 <div className="home-container" >
  <div className='home-body'>
  <h1 className='h1-home'>Weather-App</h1>
    <SearchBar />
  </div>
  <div className='added-container'>
    <DisplayCities/>
  </div>
 </div>
 )
 



}


export default Home;