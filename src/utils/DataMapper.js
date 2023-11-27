//mapea los datos de la API
import { DateTime } from "luxon";




const mapWeatherData = (info) => {
   
   
    const data  = info.weatherData;
    const data2 = info.weatherData2

    if ( !data || !data.main || !data.weather || !data.sys ) return (
       console.warn('Error no data')
    )
   
    if(!data2) return (
        console.warn('Error no data2')
    )
    

    //obtiene tanto el sunrise como el sunset
    const obtainSRandSS = (code) =>{

        const sunriseOrsunset = code;
        const sDateTime = DateTime.fromSeconds(sunriseOrsunset);
        return sDateTime.toLocaleString(DateTime.TIME_SIMPLE);

    }




    //obtiene el día de la semana
    const obtainWeekDay = () =>{
        const indexDay = new Date().getDay();
        const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        return (weekDays[indexDay -1]);
    }



       
    //Obtiene la hora local de cada ciudad
    const obtainLocalTime = (timezone)=>{
        
        const localTime = DateTime.fromMillis(Date.now(), { zone: `utc+${timezone /3600}`})
        const formatedTime = localTime.toLocaleString(DateTime.TIME_SIMPLE);
      
    
        return formatedTime;
    };
    

    //Establece el formato adecuado para a hora
    const formatDate = (data) =>{
        const dataParts = data.split(' ');
        const completeData = dataParts[1];
        const [hour, minutes] = completeData.split(':').map(Number);
        const time = `${hour}:${minutes < 10 ? '00': minutes}`;
        
        return time;
    }



    //obtiene las 5 previsiones siguientes a la hora actual
    const getNextHours = () =>{
     
            const forecast = data2.list.filter ( (prev) =>{
                const hourPrev = formatDate(new Date(prev.dt_txt).toLocaleString(DateTime.TIME_SIMPLE));
                
                return (hourPrev);
            })
            
            const nextPrev = forecast.slice(1, 6);
           
            return nextPrev;
       }
     
     

    const formatNextHours = () =>{
        
  
        const nextHour = getNextHours();
       
        let formatedData = [];
       
    if (nextHour.length==0) {
       
        return [];
    } else {
       for (let i = 0; i < 5; i++){
            
            const saveObject = {
                time:formatDate(nextHour[i].dt_txt),
                icon:nextHour[i].weather[0].icon,
                temp: parseInt(nextHour[i].main.temp),
            }
            
            formatedData.push(saveObject)
        }  ; 
    
        const currentInfo = {
            time: obtainLocalTime(data.timezone),
            icon: data.weather[0].icon,
            temp: parseInt(data.main.temp)
        };
       

        formatedData.unshift(currentInfo);
        
       
        return(formatedData) }
  
    }

  
    


  
   


    const city           = data.name;
    const temperature    = parseInt(data.main.temp);
    const tem_min        = parseInt(data.main.temp_min)
    const tem_max        = parseInt(data.main.temp_max);
    const conditions     = data.weather[0].description;
    const iconUrl        = `${data.weather[0].icon}.png`;
    const id             = data.id;
    const country        = data.sys.country;
    const time           = obtainLocalTime(data.timezone);
    const weekDay        = obtainWeekDay();
    const sunrise        = obtainSRandSS(data.sys.sunrise);
    const sunset         = obtainSRandSS(data.sys.sunset);
    const windSpeed      = data.wind.speed;
    let precipitations = 'none';
    if(data.rain){
        precipitations = data.rain['1h'];
    }
    const pressure       = data.main.pressure;
    const humidity       = data.main.humidity;
    const forecast       = formatNextHours();

    

    
    const mappedData = {

        city,
        temperature,
        conditions,
        iconUrl,
        tem_max,
        tem_min,
        id,
        country,
        time,
        weekDay,
        sunrise,
        sunset,
        windSpeed,
        precipitations,
        pressure,
        humidity,
        forecast,
    };

   
   
    return mappedData;

}

export default mapWeatherData;