
import SearchBar from '../components/SearchBar';
import {DisplayCities} from '../components/DisplayAddedCities';
import { useState } from 'react';
import DisplayDetails from '../components/DisplayDetails';







const Home = () =>{

  const [updateControl, setUpdateControl] = useState(false);
  const [detailsControl, setDetailsControl] = useState(false);
  const [visible, setVisible]  = useState(false);
  const [citySearch, setCitySearch] = useState('');
  const [controlBtn, setControlBtn] = useState(null);
  const[controlCity, setControlCity] =useState('');
  
 return (
 <div className="home-container" >
  <div className='home-body'>
    <div className='top-side'>
      <h1 className='h1-home'><img src={`src/assets/weather_icons/Group 35.png`}></img>WeatherApp</h1>
      <SearchBar updateControl={updateControl} setUpdateControl={setUpdateControl} detailsControl={detailsControl} 
      setDetailsControl={setDetailsControl} visible={visible} setVisible={setVisible}  citySearch={citySearch} setCitySearch={setCitySearch}
      controlCity={controlCity} setControlCity={setControlCity}
      />
   </div>
    </div>
    <div className='bot-side'>
      <div className='added-container'>
        <DisplayCities updateControl={updateControl} setUpdateControl={setUpdateControl} detailsControl={detailsControl} setDetailsControl={setDetailsControl} visible={visible} setVisible={setVisible}
        controlBtn={controlBtn} setControlBtn={setControlBtn}  citySearch={citySearch} setCitySearch={setCitySearch}
        controlCity={controlCity} setControlCity={setControlCity}/>
      </div>
      <div className='detail-container'>
      <DisplayDetails updateControl={updateControl} setUpdateControl={setUpdateControl} detailsControl={detailsControl} 
      setDetailsControl={setDetailsControl} visible={visible} setVisible={setVisible}  citySearch={citySearch} setCitySearch={setCitySearch}
      controlBtn={controlBtn} setControlBtn={setControlBtn} controlCity={controlCity} setControlCity={setControlCity} />
      </div>
    </div>
   
 </div>
 )
 



}


export default Home;