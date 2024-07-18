import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../ui/Layout/Layout";
import { lazy } from "react";

const HomePage = lazy(() => import("../pages/HomePage"))
const Reports = lazy(() => import("../pages/Reports"))
const ReturnsManagement = lazy(() => import("../pages/ReturnsManagement"))
const Dashboards = lazy(() => import("../pages/Dashboards"))

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'home',
                element: <HomePage />,
            },
            {
                path: 'returns',
                element: <ReturnsManagement />,
            },
            {
                path: 'reports',
                element: <Reports />,
            },
            {
                path: 'dashboards',
                element: <Dashboards />,
            },
        ],
    },
]);

export default router;