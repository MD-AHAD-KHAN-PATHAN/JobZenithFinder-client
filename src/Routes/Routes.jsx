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
                path: '/mybid',
                element: <MyBids></MyBids>
            },
            {
                path: '/addjob',
                element: <AddJob></AddJob>
            },
            {
                path: '/myposted',
                element: <MyPosted></MyPosted>
            },
            {
                path: '/bidrequest',
                element: <BidRequest></BidRequest>
            },
            {
                path: '/details',
                element: <JobDetails></JobDetails>
            },
        ]
    }
])

export default Routes;