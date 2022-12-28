import ReactDOM from "react-dom";
import { WeatherIcon } from "components/Itemicon/Itemicon";
import css from "./WeatherHourForecast.module.css";
export const WeatherHourForecast = ({data = [], forecastDate = "2022-12-24"}) => {return ReactDOM.createPortal(
        <div className={css.backDrop} onClick={()=>document.querySelector('#popup-root').classList.add('is-hide')}>
            <table className={css.dayForecast__table}>
                <caption className={css.title__Caption}>{`${forecastDate.slice(-2)} . ${forecastDate.slice(5,7)} . ${forecastDate.slice(0,4)}`}</caption>
            <thead className={css.dayForecast__thead}>
                <tr className={css.dayForecast__tr}>
                    <th>Година</th>
                    <th>t°</th>
                    <th>t° по відчуттям</th>
                    <th>вологкість, %</th>
                    <th>вітер, км/год</th>
                    <th>тиск, мм рт.ст.</th>
                    <th>хмарність, %</th>
                    <th>видимість, %</th>
                    <th>енергія сонця, ЕДж </th>
                    <th>опис погоди</th>
                    <th>іконка</th>
                </tr>
            </thead>
            <tbody className={css.dayForecast__tbody}>
                {data.map(key => 
                <tr key={key.datetimeEpoch} className={css.dayForecast__tr}>
                <td>{key.datetime.slice(0, 5)}</td>  
                <td>{Math.round(key.dew, 0)}</td>
                <td>{Math.round(key.feelslike, 0)}</td>
                <td>{Math.round(key.humidity, 0)}</td>
                <td>{Math.round(key.windspeed, 1)}</td>
                <td>{Math.round(key.pressure,0)}</td>
                <td>{Math.round(key.cloudcover, 0)}</td>
                <td>{Math.round(key.visibility, 0)}</td>
                <td>{key.solarenergy}</td>
                <td>{key.conditions}</td>
                <td>{<WeatherIcon perem={key.icon}/>}</td>
                </tr>
                )              
                }
            
            </tbody>
            </table>
        </div>,
        document.querySelector("#popup-root")
    )
}