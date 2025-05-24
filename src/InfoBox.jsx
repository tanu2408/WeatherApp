import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import './infoBox.css';
export default function InfoBox({info}){
    const HOT_URL ="https://plus.unsplash.com/premium_photo-1669482958442-f0423d37fea3?q=80&w=1963&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1634420745261-27a025f0ca8e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const COLD_URL ="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    return(
    <div>
       
        <div className='cardcontainer'>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80? RAIN_URL : info.temp>15 ? HOT_URL: COLD_URL}
        title="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{ 
           info.humidity>80? <ThunderstormIcon/> : info.temp>15 ? <SunnyIcon/>: <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Tempreture = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp ={info.tempMin}</p>
          <p>Max Temp ={info.tempMax}</p>
          <p>The Weather can be described as <i>{info.weather}</i> and feels like <b>{info.feelslike}</b>&deg;C </p>
        </Typography>
        </CardContent>
       
      </Card>
    </div>
    </div>
    );
}