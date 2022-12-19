import bus770 from "../../json/data_bus_770_759.json";
import css from './Busshadule.module.css';

export const Busshadule770 = ({day,startOfWay}) => {
    let arrayOfSearch = bus770.filter((item) => item);
        if(day !== ''){arrayOfSearch = arrayOfSearch.filter((item) => item.date === day)};
        if(startOfWay !== ''){arrayOfSearch = arrayOfSearch.filter((item) => item.from === startOfWay)};
   
    return (
        <table className={css.table}>
            <caption className={css.caption}>Розклад руху маршрутного автобусу №770, 759</caption>
            <thead>
                <tr>
                    <th>День тижня</th>
                    <th>Початок маршруту</th>
                    <th>Маршрут</th>
                    <th>Час</th>
                </tr>
            </thead>
            <tbody>
            {arrayOfSearch.map(item => 
                <tr key={item.id}>
                    <td>{item.date}</td>
                    <td>{item.from}</td>
                    <td>{item.location}</td>
                    <td>{item.time}</td>
                </tr>)}
            </tbody>
        </table>

    )
}