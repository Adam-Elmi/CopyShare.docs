import { Nav } from "./Nav";
import { SideBar } from "./SideBar";
import { Home } from "./Home";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";

export function Layout({children}) {
    const location = useLocation();

    function toggleMain() {
        if(location.pathname === '/') {
            return <Home/>
        }
        else {
            return <Outlet/>
        }
    }
    function toggleHome() {
        if(location.pathname === '/') {
            return (<>
            <Nav/>
            <Home/>
            <Footer/>
                    </> 
                    )
        }
        else {
            return  <>
                <Nav/>
                <SideBar/>
            {toggleMain()}
                <Footer/>
        </>
        }
    }
    return (
        <>
            {toggleHome()}
        </>
    )
}