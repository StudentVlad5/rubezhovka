import { useState, useEffect } from "react";
import { Audio } from 'react-loader-spinner';
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
if(status === 'pending') {  return(  
<Audio
    height="80"
    width="80"
    radius="9"
    color="blue"
    ariaLabel="loading"
    wrapperStyle
    wrapperClass
/>)}

if(status === 'resolved'){return (<div className={css.section__Weather}>
        <table className={css.table_weather}>
        <caption className={css.title_weather}>?????????????? ???????????? ?????? {currentDay} ???? 15 ????????</caption>
            <thead className={css.thead_weather}>
                <tr className={css.tr_weather}>
                    <th>????????</th>
                    <th>max t??</th>
                    <th>min t??</th>
                    <th className={css.invisible_smallscreen}>?????????????? t??</th>
                    <th className={css.invisible_smallscreen}>t?? ???? ??????-????????????</th>
                    <th>??????????-??????????, %</th>
                    <th>??????????, ????/??????</th>
                    <th className={css.invisible_smallscreen}>????????, ???? ????.????.</th>
                    <th className={css.invisible_smallscreen}>????????-??????????, %</th>
                    <th className={css.invisible_smallscreen}>??????????????????, %</th>
                    <th className={css.invisible_smallscreen}>??????????-??????????, ??????</th>
                    <th className={css.invisible_smallscreen}>????????????????</th>
                    <th className={css.invisible_smallscreen}>?????????? ??????????</th>
                    <th className={css.description}>???????? ????????????</th>
                    <th>????????????</th>
                </tr>
            </thead>
            <tbody>
                {list.days.map(item => 
                    <tr className={css.tr_weather} key={item.datetime} onClick={(e)=>openModalWindow(e, item.hours)} data-setday={item.datetime}>
                    <td className={css.datetime} style={{padding:'0 5px'}}>{item.datetime.slice(-2)+item.datetime.slice(4,8)+item.datetime.slice(0,4)}</td>  
                    <td >{item.tempmax}</td>
                    <td>{item.tempmin}</td>
                    <td className={css.invisible_smallscreen}>{item.temp}</td>
                    <td className={css.invisible_smallscreen}>{item.feelslike}</td>
                    <td>{Math.round(item.humidity,0)}</td>
                    <td>{item.windspeed}</td>
                    <td className={css.invisible_smallscreen}>{Math.round(item.pressure,0)}</td>
                    <td className={css.invisible_smallscreen}>{Math.round(item.cloudcover,0)}</td>
                    <td className={css.invisible_smallscreen}>{Math.round(item.visibility,0)}</td>
                    <td className={css.invisible_smallscreen}>{item.solarenergy}</td>
                    <td className={css.invisible_smallscreen}>{item.sunrise}</td>
                    <td className={css.invisible_smallscreen}>{item.sunset}</td>
                    <td className={css.description}>{item.description}</td>
                    <td>{WeatherIcon(item.icon)}</td>
                    </tr>)}
            </tbody>
        </table>
        <WeatherHourForecast data={listOfHours} forecastDate = {daySet}/>
        </div>
        )
}}

