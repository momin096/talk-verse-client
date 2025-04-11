import { Outlet} from "react-router-dom";
import useAuth from "../context/useAuth";

const MainLayout = () => {
    const { loading } = useAuth()

    if (loading) {
        return <loading />
    }

    return (
        <div>
            <Outlet />
        </div>
    )
};

export default MainLayout;