
import { Carousel } from '@trendyol-js/react-carousel';




const MyComponent = ({city}) => {
  

  
  return (
    <>
     <Carousel  show={3} slide={2} swiping={true} dynamic={true} transition={0.5} >
     
     {city.lenght!=0 ? (city.forecast.map((o, index) =>{
      return (
        <div className="carousel-container" key={index}> 
            <span>{(o.time == city.time) ? ('now') : (o.time)}</span><img className='carousel-img' src={`src/assets/weather_icons/${o.icon}.png`}alt='w-icon'></img><span>{o.temp}º</span>
        </div>)}))
        :
        ( <p>No forecast yet</p>)
      
      }
    </Carousel>
    
    </>
  );
};

export default MyComponent;