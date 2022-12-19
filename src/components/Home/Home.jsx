import {Link, Outlet} from "react-router-dom";
import css from "./Home.module.css";

export const Home = () => {
    return (
    <>
        <div className={css.menu}>
            <h3>Михайлівка-Рубежівка</h3>
            <Link to="bus_way_shadule">Маршрути автобусів</Link>
        </div>
        <Outlet/>
    </>)
}