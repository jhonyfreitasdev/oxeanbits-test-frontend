import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/home/Home";

export const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home /> } />
        </Routes>
    </BrowserRouter>
);