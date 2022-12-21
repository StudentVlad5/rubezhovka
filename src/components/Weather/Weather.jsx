import { useState, useEffect } from "react";

export const Weather = () =>{

    const API_WEATHER = 'https:weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/50.499578%2C%2030.126108?unitGroup=metric&key=KR6SBLEYUNUF9LCRX4YDHJT7K&contentType=json';
    
    const [status,setStatus] = useState('idle');
    const [currentDay, setCurrentDay] = useState('');
    const [list, setList] = useState(JSON.parse(localStorage.getItem('list') ||[]));

    useEffect(()=>{
        const date = new Date();
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
        <table>
        <caption>Погода</caption>
            <thead>
                <tr>
                    <th>День</th>
                    <th>max t</th>
                    <th>min t</th>
                    <th>середня t</th>
                    <th>max t по відчуттям</th>
                    <th>min t по відчуттям</th>
                    <th>середня t по відчуттям</th>
                    <th>вологість</th>
                    <th>вітер</th>
                    <th>тиск</th>
                    <th>хмарність</th>
                    <th>видимість</th>
                    <th>сонячність</th>
                    <th>світанок</th>
                    <th>захід сонця</th>
                    <th>умови</th>
                    <th>опис погоди</th>
                    <th>іконка</th>
                </tr>
            </thead>
            <tbody>
                {list.days.map(item => 
                    <tr key={item.datetime}>
                    <td>{item.datetime}</td>  
                    <td>{item.tempmax}</td>
                    <td>{item.tempmin}</td>
                    <td>{item.temp}</td>
                    <td>{item.feelslikemax}</td>
                    <td>{item.feelslikemin}</td>
                    <td>{item.feelslike}</td>
                    <td>{item.humidity}</td>
                    <td>{item.windspeed}</td>
                    <td>{item.pressure}</td>
                    <td>{item.cloudcover}</td>
                    <td>{item.visibility}</td>
                    <td>{item.solarenergy}</td>
                    <td>{item.sunrise}</td>
                    <td>{item.sunset}</td>
                    <td>{item.conditions}</td>
                    <td>{item.description}</td>
                    <td>{item.icon}</td>
                    </tr>)}
            </tbody>
        </table>)
}}

