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
      <div>
        <div
        className="hero h-96"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/9Ng03jY/Blue-3-D-Cute-IT-Security-Event-Banner.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content content-start text-neutral-content">
          <div className="max-w-md">
          <h2 className="text-4xl font-bold text-center">
          Your Posted Jobs
        </h2>
          </div>
        </div>
      </div>


        {
          myPostedJobs.length>0?
          <div className="max-w-7xl mx-auto ">
              {myPostedJobs.map((myPostedJob) => (
                <MyPostedJobCard
                  key={myPostedJob._id}
                  myPostedJob={myPostedJob}
                ></MyPostedJobCard>
              ))}
          </div> : <div className="max-w-7xl mx-auto text-center my-44">Please Post A Job First. <Link to='/addJob' className="text-red-700 underline">click here for post a new job</Link></div>
        }
      </div>
    );
};

export default MyPostedJob;