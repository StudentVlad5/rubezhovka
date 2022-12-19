import { Outlet, NavLink} from 'react-router-dom';

// import css from "./Navigation.module.css";

export  const Navigation = () => {
    return (<header>
        <ul>
                <li><NavLink to="339">№ 339</NavLink></li>
                <li><NavLink to="770">№№ 770, 759</NavLink></li>
            <Outlet/>
        </ul>
    </header>)
}