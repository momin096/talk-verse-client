import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import FindTutors from "./pages/FindTutors";
import AddTutorials from "./pages/AddTutorials";
import MyTutorials from "./pages/MyTutorials";
import MyBookedTutors from "./pages/MyBookedTutors";
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";
import TutorDetails from "./pages/TutorDetails";
import EditTutorial from "./pages/EditTutorial";

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
                path: '/tutor/:id',
                element: <TutorDetails />,
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
                path: '/edit-tutorial/:id',
                element: <EditTutorial />
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