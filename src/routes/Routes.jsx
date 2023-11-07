import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJob from "../pages/MyPostedJobs/MyPostedJob";
import MyBids from "../pages/MyBids/MyBids";
import BidRequests from "../pages/BidRequests/BidRequests";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Signup/SignUp";
import UpdateJob from "../pages/UpdateJob.jsx/UpdateJob";
import JobDetail from "../components/JobDetail";
import PrivateRoute from "./PrivateRoute";


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
                element:<PrivateRoute><AddJob></AddJob></PrivateRoute>
            },
            {
                path:'updateJob/:id',
                element: <UpdateJob></UpdateJob>,
                loader:({params}) => fetch(`http://localhost:5000/addJob/${params.id}`)
            },
            {
                path:'jobDetail/:id',
                element: <PrivateRoute><JobDetail></JobDetail></PrivateRoute>,
                loader:({params}) => fetch(`http://localhost:5000/addJob/${params.id}`)
            },
            {
                path:'myPostedJobs',
                element: <PrivateRoute><MyPostedJob></MyPostedJob></PrivateRoute>,
                loader:() =>fetch('http://localhost:5000/addJob')
            },
            {
                path:'myBids',
                element: <PrivateRoute><MyBids></MyBids></PrivateRoute>,
                loader:() =>fetch('http://localhost:5000/bidJob')
                
            },
            {
                path:'bidRequests',
                element: <PrivateRoute><BidRequests></BidRequests></PrivateRoute>,

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