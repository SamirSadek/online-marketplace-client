import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyBidTableRow from "./MyBidTableRow";
import { useLoaderData } from "react-router-dom";

const MyBids = () => {
  const { user } = useContext(AuthContext);
  const allBidJobs = useLoaderData()
  const myBidJobs = allBidJobs.filter(allBidJob => allBidJob.bidderEmail === user?.email)

  return (
    <div className=" text-black">
        <div
        className="hero h-96"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/5sh1t9F/Colorful-Ilustrated-Hiring-Banner-Landscape.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content content-start text-neutral-content">
          <div className="max-w-md">
          <h2 className="text-4xl font-bold text-center">
          My Bided Jobs
        </h2>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto max-w-7xl mx-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              
              <th>Title</th>
              <th>Email</th>
              <th>Deadline</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                myBidJobs.map(myBidJob => <MyBidTableRow key={myBidJob._id} myBidJob={myBidJob}></MyBidTableRow>)

            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBids;
