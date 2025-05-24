import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './SearchBox.css';
export default function SearchBox({updateInfo})
{   
    let[city ,setCity] = useState("");
    let[error , setError] = useState(false);
   
    const API_URL = import.meta.env.VITE_API_URL;  
    const API_KEY = import.meta.env.VITE_API_KEY; 

    let getWeatherInfo = async()=>{
      try{
        let response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      let result ={
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description
        
      };
      console.log(result);
      return result;
      }catch(err){
       throw err;
      }
      
    };
   
    let handleChange = (event)=>{
       setCity(event.target.value);
    };
    let handleSubmit = async(event)=>{
      try{
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo =  await getWeatherInfo();
        updateInfo(newInfo);
      } catch(err){
        setError(true);
       }
        
    };
    return(
        <div className='searchbox'>
            <form onSubmit={handleSubmit}>
              <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
              <br></br> <br></br>
              <Button variant="contained" type="submit" > Search </Button>
              <br></br> <br></br>
               {error && <p style={{color:"red"}}>"No such place exits!"</p>}
              </form>
              
        </div>
    );
}