import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJob from "../pages/MyPostedJobs/MyPostedJob";
import MyBids from "../pages/MyBids/MyBids";
import BidRequests from "../pages/BidRequests/BidRequests";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Signup/SignUp";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader:() =>fetch('http://localhost:5000/addJob')
            },
            {
                path:'addJob',
                element: <AddJob></AddJob>
            },
            {
                path:'myPostedJobs',
                element: <MyPostedJob></MyPostedJob>
            },
            {
                path:'myBids',
                element: <MyBids></MyBids>
            },
            {
                path:'bidRequests',
                element: <BidRequests></BidRequests>
            },
            {
                path:'login',
                element: <Login></Login>
            },
            {
                path:'signup',
                element: <SignUp></SignUp>
            }
        ]
    }
])

export default router;