import bus339 from "json/data_bus_339.json";
import css from './Busshadule.module.css';

export const Busshadule339 = ({day,startOfWay}) => {
    let arrayOfSearch = bus339.filter((item) => item);
        if(day !== ''){arrayOfSearch = arrayOfSearch.filter((item) => item.date === day)};
        if(startOfWay !== ''){arrayOfSearch = arrayOfSearch.filter((item) => item.from === startOfWay)};
   
    return (
        <table className={css.busshadule__table}>
            <caption className={css.busshadule__caption}>Розклад руху маршрутного автобусу №339</caption>
            <thead className={css.busshadule__thead}>
                <tr className={css.busshadule__tr}>
                    <th>День тижня</th>
                    <th>Початок маршруту</th>
                    <th>Маршрут</th>
                    <th>Час</th>
                </tr>
            </thead>
            <tbody className={css.busshadule__tbody}>
            {arrayOfSearch.map(item => 
                <tr className={css.busshadule__tr} key={item.id}>
                    <td>{item.date}</td>
                    <td>{item.from}</td>
                    <td>{item.location}</td>
                    <td>{item.time}</td>
                </tr>)}
            </tbody>
        </table>

    )
}
