import {  Outlet } from 'react-router-dom';
import { NavMenu } from 'components/Common/Common';
import css from "./Navigation.module.css";

export  const Navigation = () => {
    return (<div style={{width:'100%'}}><div className={css.NavContainer}>
                {NavMenu("339", "№ 339 - з м.Ірпінь-Забуччя")}
                {NavMenu("770", "№№ 770, 759 - з м.Київ - Ч.Хутір")}
     </div>
     <div><Outlet/></div>
     </div>
     )
}