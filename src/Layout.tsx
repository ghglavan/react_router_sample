import { Link, Outlet } from "react-router-dom";


export default function Layout() {
    return (<>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Outlet></Outlet>
    </>)
}