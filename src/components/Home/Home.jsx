import { Outlet} from "react-router-dom";
import { NavMenu } from 'components/Common/Common';
// import { StarOutlined, StarFilled, StarTwoTone, WhatsAppOutlined } from '@ant-design/icons';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import css from "./Home.module.css";
import { useState } from "react";

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
        </div>
        <Outlet/>
    </>)
}