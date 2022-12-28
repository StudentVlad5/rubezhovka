import { Outlet} from "react-router-dom";
import { NavMenu } from 'components/Common/Common'
import css from "./Home.module.css";

export const Home = () => {
    return (
    <>
        <div className={css.menu}>
            <h3>Михайлівка-Рубежівка</h3>
            {NavMenu("bus_way_shadule", <h5>Маршрути автобусів</h5>)}
            {NavMenu("weather", <h5>Погода</h5>)}
            {NavMenu("goods", <h5>Товари</h5>)}
            {NavMenu("servises", <h5>Послуги</h5>)}
        </div>
        <Outlet/>
    </>)
}