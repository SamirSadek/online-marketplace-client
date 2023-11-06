import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import MyPostedJobCard from "../../components/MyPostedJobCard";

const MyPostedJob = () => {
    const {user} = useContext(AuthContext)
    const allJobs = useLoaderData();
    const myPostedJobs = allJobs.filter(myPostedJob => myPostedJob.employerEmail === user?.email)
    
    const {
        employerEmail,
        title,
        deadline,
        category,
        minPrice,
        maxPrice,
        description,
      } = myPostedJobs;
      console.log(myPostedJobs)
    return (
        user?
        <div className="max-w-7xl mx-auto ">
            {myPostedJobs.map((myPostedJob) => (
              <MyPostedJobCard
                key={myPostedJob._id}
                myPostedJob={myPostedJob}
              ></MyPostedJobCard>
            ))}
        </div> : <div className="max-w-7xl mx-auto text-center my-44">Please Post A Job First. <Link to='/addJob' className="text-red-700 underline">click here for post a new job</Link></div>
    );
};

export default MyPostedJob;