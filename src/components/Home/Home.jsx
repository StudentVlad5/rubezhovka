import {Link, Outlet} from "react-router-dom";
import css from "./Home.module.css";

export const Home = () => {
    return (
    <>
        <div className={css.menu}>
            <h3>Михайлівка-Рубежівка</h3>
            <Link to="bus_way_shadule"><h5>Маршрути автобусів</h5></Link>
            <Link to="weather"><h5>Погода</h5></Link>
            <Link to="goods"><h5>Товари</h5></Link>
        </div>
        <Outlet/>
    </>)
}