import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useAuth from "../hooks/useAuth";

const MainLayout = () => {
    const { loading } = useAuth();
    const [theme, setTheme] = useState('light');

    document.documentElement.setAttribute('data-theme', theme);



    return (
        <div>
            <Navbar theme={theme} setTheme={setTheme} />

            <Outlet />

            <Footer />
        </div>
    )
};

export default MainLayout;