import { useState, useEffect } from "react";
import  { WeatherIcon } from "components/Itemicon/Itemicon";
import { WeatherHourForecast } from "components/WeatherHourForecast/WeatherHourForecast";
import  css  from "./Weather.module.css";

export const Weather = () =>{

    const [status,setStatus] = useState('idle');
    const [currentDay, setCurrentDay] = useState('');
    const [list, setList] = useState([]);
    const [daySet, setDaySet] = useState('');
    const [listOfHours, setListOfHours] = useState([]);

    const API_WEATHER = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/50.499578%2C%2030.126108?unitGroup=metric&key=KR6SBLEYUNUF9LCRX4YDHJT7K&contentType=json';

      useEffect(()=>{
        const date = new Date();
        if(JSON.parse(localStorage.getItem('list')) !== '' && JSON.parse(localStorage.getItem('list')) !== undefined){setList(JSON.parse(localStorage.getItem('list')))};
        const dateAPI = date.getDate()+'.'+ (date.getMonth()+1) + '.' + date.getFullYear();

async function dataWeather () {
    setStatus('pending');
    await fetch(API_WEATHER, {
        referrer: ""
        }).then(res=>{if(res.ok) {return res.json()} 
    return Promise.reject(new Error(`Can't find anything`))})
    .then(key => {
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

function openModalWindow (e, item) {
    e.preventDefault();
    document.querySelector('#popup-root').classList.remove('is-hide');
    setDaySet(e.currentTarget.dataset.setday);
    setListOfHours(item.map(item=>item))
    console.log(daySet, listOfHours);
} 

if(status === 'resolved'){return (<div className={css.section__Weather}>
        <table className={css.table_weather}>
        <caption className={css.title_weather}>Прогноз погоди від {currentDay} на 15 днів</caption>
            <thead className={css.thead_weather}>
                <tr className={css.tr_weather}>
                    <th>Дата</th>
                    <th>max t°</th>
                    <th>min t°</th>
                    <th>середня t°</th>
                    <th>t° по від-чуттям</th>
                    <th>волог-кість, %</th>
                    <th>вітер, км/год</th>
                    <th>тиск, мм рт.ст.</th>
                    <th>хмар-ність, %</th>
                    <th>видимість, %</th>
                    <th>соняч-ність, ЕДж</th>
                    <th>світанок</th>
                    <th>захід сонця</th>
                    <th className={css.description}>опис погоди</th>
                    <th>іконка</th>
                </tr>
            </thead>
            <tbody>
                {list.days.map(item => 
                    <tr className={css.tr_weather} key={item.datetime} onClick={(e)=>openModalWindow(e, item.hours)} data-setday={item.datetime}>
                    <td className={css.datetime} style={{padding:'0 5px'}}>{item.datetime.slice(-2)+item.datetime.slice(4,8)+item.datetime.slice(0,4)}</td>  
                    <td>{item.tempmax}</td>
                    <td>{item.tempmin}</td>
                    <td>{item.temp}</td>
                    <td>{item.feelslike}</td>
                    <td>{Math.round(item.humidity,0)}</td>
                    <td>{item.windspeed}</td>
                    <td>{Math.round(item.pressure,0)}</td>
                    <td>{Math.round(item.cloudcover,0)}</td>
                    <td>{Math.round(item.visibility,0)}</td>
                    <td>{item.solarenergy}</td>
                    <td>{item.sunrise}</td>
                    <td>{item.sunset}</td>
                    <td className={css.description}>{item.description}</td>
                    <td>{WeatherIcon(item.icon)}</td>
                    </tr>)}
            </tbody>
        </table>
        <WeatherHourForecast data={listOfHours} forecastDate = {daySet}/>
        </div>
        )
}}

