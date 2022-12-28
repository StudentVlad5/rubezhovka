import bus770 from "json/data_bus_770_759.json";
import css from './Busshadule.module.css';

export const Busshadule770 = ({day,startOfWay}) => {
    let arrayOfSearch = bus770.filter((item) => item);
        if(day !== ''){arrayOfSearch = arrayOfSearch.filter((item) => item.date === day)};
        if(startOfWay !== ''){arrayOfSearch = arrayOfSearch.filter((item) => item.from === startOfWay)};
   
    return (
        <table className={css.busshadule__table}>
            <caption className={css.busshadule__caption}>Розклад руху маршрутного автобусу №770, 759</caption>
            <thead className={css.busshadule__thead}>
                <tr className={css.busshadule__th}>
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