import {  NavLink, Outlet } from 'react-router-dom';
import css from "./Navigation.module.css";

export  const Navigation = () => {
    return (<div style={{width:'100%'}}><div className={css.NavContainer}>
                <NavLink className={css.navlink}  style={({ isActive }) => isActive ? {
                    color: '#fff',
                    background: '#001ddc',
                    textDecoration: 'none',
                    listStyle: 'none',
                    fontSize: 18,
                    padding: 5,
                    width: 150,
                    marginLeft: 10,
                    borderRadius: 10,
                  }
                : { color: '#545e6f', 
                    background: '#f0f0f0', 
                    textDecoration: 'none',
                    fontSize: 18,
                    padding: 5,
                    width: 150,
                    marginLeft: 10,
                    borderRadius: 10, }}
                    to="339">№ 339</NavLink>
                <NavLink style={({ isActive }) => isActive ? {
                    color: '#fff',
                    background: '#001ddc',
                    textDecoration: 'none',
                    listStyle: 'none',
                    fontSize: 18,
                    padding: 5,
                    width: 150,
                    marginLeft: 10,
                    borderRadius: 10,
                  }
                : { color: '#545e6f',
                    background: '#f0f0f0', 
                    textDecoration: 'none', 
                    listStyle: 'none',
                    fontSize: 18,
                    padding: 5,
                    width: 150,
                    marginLeft: 10,
                    borderRadius: 10, }}
                    to="770">№№ 770, 759</NavLink>
     </div>
     <div><Outlet/></div>
     </div>
     )
}