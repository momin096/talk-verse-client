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
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
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
                element: <PrivateRoute >
                    <TutorDetails />
                </PrivateRoute>,
            },
            {
                path: '/add-tutorials',
                element: <PrivateRoute>
                    <AddTutorials />
                </PrivateRoute>
            },
            {
                path: '/my-tutorials',
                element: <PrivateRoute>
                    <MyTutorials />
                </PrivateRoute>
            },
            {
                path: '/edit-tutorial/:id',
                element: <PrivateRoute>
                    <EditTutorial />
                </PrivateRoute>
            },
            {
                path: '/my-booked-tutorials',
                element: <PrivateRoute>
                    <MyBookedTutors />
                </PrivateRoute>
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