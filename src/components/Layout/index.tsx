import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";


const Layout = () => {
    const location = useLocation();

    const showHamburger: boolean = location.pathname.includes("/category") || location.pathname.includes("/detail");


    return (
        <>
            <Header HidenOrShowComponents={showHamburger}/>
            <>
                <Outlet />
            </>

            <Footer/>
        </>
    )
}

export default Layout;