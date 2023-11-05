import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import MyBids from "../Pages/MyBids/MyBids";
import AddJob from "../Pages/AddJob/AddJob";
import MyPosted from "../Pages/MyPosted/MyPosted";
import BidRequest from "../Pages/BidRequest/BidRequest";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";

const Routes = createBrowserRouter([
    {
        path: '/',
        errorElement: <Error></Error>,
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/mybids',
                element: <PrivateRoute><MyBids></MyBids></PrivateRoute>
            },
            {
                path: '/addjob',
                element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
            },
            {
                path: '/mypostedjob',
                element: <PrivateRoute><MyPosted></MyPosted></PrivateRoute>
            },
            {
                path: '/bidrequests',
                element: <PrivateRoute><BidRequest></BidRequest></PrivateRoute>
            },
            {
                path: '/details',
                element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>
            },
        ]
    }
])

export default Routes;