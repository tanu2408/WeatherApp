import SearchBox from './SearchBox'
import InfoBox from './InfoBox.jsx'
import { useState } from 'react';
export default function WeatherApp(){
  const [WeatherInfo , setWeatherInfo] = useState({
        city:"Mumbai",
        feelslike:24.08,
        temp :25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity :47,
        weather:"clear sky"
  });
  let updateInfo = (result)=>{
    setWeatherInfo(result)
  }

    return(
        <div >
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info ={WeatherInfo}/>
        </div>
    );
}