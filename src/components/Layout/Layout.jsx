import { Outlet } from "react-router-dom"
import {App} from "../App"

export const Layout = () => {
    return (
    <section>
        <App/>
        <Outlet/>
    </section>
    )
}