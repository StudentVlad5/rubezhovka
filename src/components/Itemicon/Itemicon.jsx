import snowshowersday from "img/snow-showers-day.png";
import snowshowersnight from "img/snow-showers-night.png";
import thunder from "img/thunder.png";
import thunderrain from "img/thunder-rain.png";
import thundershowersday from "img/thunder-showers-day.png";
import thundershowersnight from "img/thunder-showers-night.png";
import wind from "img/wind.png";
import clearday from "img/clear-day.png";
import clearnight from "img/clear-night.png";
import cloudy from "img/cloudy.png";
import hail from "img/hail.png";
import partlycloudyday from "img/partly-cloudy-day.png";
import partlycloudynight from "img/partly-cloudy-night.png";
import rain from "img/rain.png";
import rainsnow from "img/rain-snow.png";
import rainsnowshowersday from "img/rain-snow-showers-day.png";
import rainsnowshowersnight from "img/rain-snow-showers-night.png";
import showersday from "img/showers-day.png";
import showersnight from "img/showers-night.png";
import sleet from "img/sleet.png";
import snow from "img/snow.png";
import fog from "img/fog.png";

export const WeatherIcon = (perem) =>{
    switch(perem){
        case "snow-showers-day":
        return <img src={snowshowersday} alt={perem}/>
        case "snow-showers-night":
        return <img src={snowshowersnight} alt={perem}/>
        case "thunder":
        return <img src={thunder} alt={perem}/>
        case "thunder-rain":
        return <img src={thunderrain} alt={perem}/>
        case "thunder-showers-day":
        return <img src={thundershowersday} alt={perem}/>
        case "thunder-showers-night":
        return <img src={thundershowersnight} alt={perem}/>
        case "wind":
        return <img src={wind} alt={perem}/>
        case "clear-day":
        return <img src={clearday} alt={perem}/>
        case "clear-night":
        return <img src={clearnight} alt={perem}/>
        case "cloudy":
        return <img src={cloudy} alt={perem}/>
        case "hail":
        return <img src={hail} alt={perem}/>
        case "partly-cloudy-day":
        return <img src={partlycloudyday} alt={perem}/>
        case "partly-cloudy-night":
        return <img src={partlycloudynight} alt={perem}/>
        case "rain":
        return <img src={rain} alt={perem}/>
        case "rain-snow":
        return <img src={rainsnow} alt={perem}/>
        case "rain-snow-showers-day":
        return <img src={rainsnowshowersday} alt={perem}/>
        case "rain-snow-showers-night":
        return <img src={rainsnowshowersnight} alt={perem}/>
        case "showersday":
        return <img src={showersday} alt={perem}/>
        case "showers-night":
        return <img src={showersnight} alt={perem}/>
        case "sleet":
        return <img src={sleet} alt={perem}/>
        case "snow":
        return <img src={snow} alt={perem}/>
        case "fog":
        return <img src={fog} alt={perem}/>
        default:
        <>{perem}</>
    }
    
}
    
