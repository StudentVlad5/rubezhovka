import { useState, useEffect } from "react";
import  { WeatherIcon } from "../Itemicon/Itemicon";
import  css  from "./Weather.module.css";

export const Weather = () =>{

    const API_WEATHER = 'https:weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/50.499578%2C%2030.126108?unitGroup=metric&key=KR6SBLEYUNUF9LCRX4YDHJT7K&contentType=json';
    
    const [status,setStatus] = useState('idle');
    const [currentDay, setCurrentDay] = useState('');
    const [list, setList] = useState([]);

      useEffect(()=>{
        const date = new Date();
        if(JSON.parse(localStorage.getItem('list')) !== '' && JSON.parse(localStorage.getItem('list')) !== undefined){setList(JSON.parse(localStorage.getItem('list')))};
        const dateAPI = date.getDate()+'.'+ (date.getMonth()+1) + '.' + date.getFullYear();
async function dataWeather () {
    setStatus('pending');
    await fetch(API_WEATHER).then(res=>{if(res.ok) {return res.json()} 
    return Promise.reject(new Error(`Can't find anything`))})
    .then(key => {console.log(key);
        localStorage.setItem('list', (JSON.stringify(key)))
        setList(key);
        setCurrentDay(dateAPI);
        setStatus('resolved');
        })
    .catch(error=>{
        console.log(error);
    }).finally(setStatus('idle'));
}
if(currentDay !== dateAPI) {dataWeather()}
},[currentDay, status])


if(status === 'resolved'){return (
        <table className={css.table_weather}>
        <caption>Прогноз погоди станом на {currentDay}</caption>
            <thead>
                <tr>
                    <th>День</th>
                    <th>max t</th>
                    <th>min t</th>
                    <th>середня t</th>
                    <th>t по від-чуттям</th>
                    <th>волог-кість</th>
                    <th>вітер</th>
                    <th>тиск</th>
                    <th>хмар-ність</th>
                    <th>видимість</th>
                    <th>соняч-ність</th>
                    <th>світанок</th>
                    <th>захід сонця</th>
                    <th className={css.description}>опис погоди</th>
                    <th>іконка</th>
                </tr>
            </thead>
            <tbody>
                {list.days.map(item => 
                    <tr key={item.datetime}>
                    <td className={css.datetime}>{item.datetime}</td>  
                    <td>{item.tempmax}</td>
                    <td>{item.tempmin}</td>
                    <td>{item.temp}</td>
                    <td>{item.feelslike}</td>
                    <td>{item.humidity}</td>
                    <td>{item.windspeed}</td>
                    <td>{item.pressure}</td>
                    <td>{item.cloudcover}</td>
                    <td>{item.visibility}</td>
                    <td>{item.solarenergy}</td>
                    <td>{item.sunrise}</td>
                    <td>{item.sunset}</td>
                    <td className={css.description}>{item.description}</td>
                    <td>{<WeatherIcon perem={item.icon}/>}</td>
                    </tr>)}
            </tbody>
        </table>)
}}

