import { Outlet } from "react-router-dom";
import useAuth from "../context/useAuth";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    const { loading } = useAuth();
    const [theme, setTheme] = useState('light');

    document.documentElement.setAttribute('data-theme', theme);

    if (loading) {
        return <loading />
    }

    return (
        <div>
            <Navbar theme={theme} setTheme={setTheme} />

            <Outlet />

            <Footer />
        </div>
    )
};

export default MainLayout;