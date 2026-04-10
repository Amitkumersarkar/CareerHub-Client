import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "register",
                Component: Register
            },
            {
                path: "signIn",
                Component: SignIn
            },
            {
                path: "jobs/:id",
                element: (
                    <PrivateRoute>
                        <JobDetails />
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(`http://localhost:4000/jobs/${params.id}`)
            },
            {
                path: '/apply/:id',
                element: (
                    <PrivateRoute>
                        <JobApply></JobApply>
                    </PrivateRoute>
                )
            }
        ]
    },
]);

export default router;