
import React from 'react';
import {ReactComponent as SnowShowersDay} from "img/snow-showers-day.svg";
import {ReactComponent as SnowShowersNight} from "img/snow-showers-night.svg";
import {ReactComponent as Thunder} from "img/thunder.svg";
import {ReactComponent as ThunderRain} from "img/thunder-rain.svg";
import {ReactComponent as ThunderShowersDay} from "img/thunder-showers-day.svg";
import {ReactComponent as ThunderShowersNight} from "img/thunder-showers-night.svg";
import {ReactComponent as Wind} from "img/wind.svg";
import {ReactComponent as ClearDay} from "img/clear-day.svg";
import {ReactComponent as ClearNight} from "img/clear-night.svg";
import {ReactComponent as Cloudy} from "img/cloudy.svg";
import {ReactComponent as Hail} from "img/hail.svg";
import {ReactComponent as PartlyCloudyDay} from "img/partly-cloudy-day.svg";
import {ReactComponent as PartlyCloudyNight} from "img/partly-cloudy-night.svg";
import {ReactComponent as Rain} from "img/rain.svg";
import {ReactComponent as RainSnow} from "img/rain-snow.svg";
import {ReactComponent as RainRnowShowersDay} from "img/rain-snow-showers-day.svg";
import {ReactComponent as RainSnowShowersNight} from "img/rain-snow-showers-night.svg";
import {ReactComponent as ShowersDay} from "img/showers-day.svg";
import {ReactComponent as ShowersNight} from "img/showers-night.svg";
import {ReactComponent as Sleet} from "img/sleet.svg";
import {ReactComponent as Snow} from "img/snow.svg";
import {ReactComponent as Fog} from "img/fog.svg";

export const WeatherIcon = ({perem}) =>{
    switch(perem){
        case "snow-showers-day": return <SnowShowersDay/>;
        case "snow-showers-night": return <SnowShowersNight/>;
        case "thunder": return <Thunder/>;
        case "thunder-rain": return <ThunderRain/>;
        case "thunder-showers-day": return <ThunderShowersDay/>;
        case "thunder-showers-night": return <ThunderShowersNight/>;
        case "wind": return <Wind/>;
        case "clear-day": return <ClearDay/>;
        case "clear-night": return <ClearNight/>;
        case "cloudy": return <Cloudy/>;
        case "partly-cloudy-day": return <PartlyCloudyDay/>;
        case "hail": return <Hail/>;
        case "partly-cloudy-night": return <PartlyCloudyNight/>;
        case "rain": return <Rain/>;
        case "rain-snow": return <RainSnow/>;
        case "rain-snow-showers-day": return <RainRnowShowersDay/>;
        case "rain-snow-showers-night": return <RainSnowShowersNight/>;
        case "showers-day": return <ShowersDay/>;
        case "showers-night": return <ShowersNight/>;
        case "sleet": return <Sleet/>;
        case "snow": return <Snow/>;
        case "fog": return <Fog/>;
        default:
            return perem;
        }
    }
