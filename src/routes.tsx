
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Category from "./pages/Category";
import Detail from "./pages/Detail";
import Payment from "./pages/Payment";
import Dashboard from "./pages/Dashboard";


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/category" element={<Category/>}/>
                    <Route path="/detail" element={<Detail />}/>
                    <Route path="/payment" element={<Payment />}/>
                    <Route path="/payment" element={<Dashboard />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;