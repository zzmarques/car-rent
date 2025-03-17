
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Category from "./pages/Category";


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/category" element={<Category/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;