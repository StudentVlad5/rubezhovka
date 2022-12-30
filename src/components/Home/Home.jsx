import { Outlet} from "react-router-dom";
import { useState } from "react";
import { NavMenu } from 'components/Common/Common';
import { Footer } from 'components/Footer/Footer'
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import css from "./Home.module.css";

export const Home = () => {
const [statusMenu, setStatusMenu] = useState(false);

const  handleHideBar = () => {
      document.querySelector('#menuBar').style.display = 'none';
      setStatusMenu(!statusMenu);
    }
const  handleViewBar = () => {
    document.querySelector('#menuBar').style.display = 'flex';
    setStatusMenu(!statusMenu);
    }

    return (
    <> {statusMenu && <RightCircleOutlined className={css.rightArrow} onClick={handleViewBar}/>}
        <div className={css.menu} id="menuBar">
            <LeftCircleOutlined className={css.leftArrow} onClick={handleHideBar}/>
            <h3>Михайлівка-Рубежівка</h3>
            {NavMenu("bus_way_shadule", <h5>Маршрути автобусів</h5>)}
            {NavMenu("weather", <h5>Погода</h5>)}
            {NavMenu("goods", <h5>Товари</h5>)}
            {NavMenu("servises", <h5>Послуги</h5>)}
            <Footer/>
        </div>
        <Outlet/>
    </>)
}