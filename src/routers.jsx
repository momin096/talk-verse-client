import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import FindTutors from "./pages/FindTutors";
import AddTutorials from "./pages/AddTutorials";
import MyTutorials from "./pages/MyTutorials";
import MyBookedTutors from "./pages/MyBookedTutors";
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/find-tutors',
                element: <FindTutors />
            },
            {
                path: '/add-tutorials',
                element: <AddTutorials />
            },
            {
                path: '/my-tutorials',
                element: <MyTutorials />
            },
            {
                path: '/my-booked-tutorials',
                element: <MyBookedTutors />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    },
]);

export default router;