import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJob from "../pages/MyPostedJobs/MyPostedJob";
import MyBids from "../pages/MyBids/MyBids";
import BidRequests from "../pages/BidRequests/BidRequests";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
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
                path:'bidRequest',
                element: <BidRequests></BidRequests>
            },
        ]
    }
])

export default router;