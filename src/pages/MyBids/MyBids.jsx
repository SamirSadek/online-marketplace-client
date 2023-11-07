import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyBidTableRow from "./MyBidTableRow";
import { useLoaderData } from "react-router-dom";

const MyBids = () => {
  const { user } = useContext(AuthContext);
  const allBidJobs = useLoaderData()
  const myBidJobs = allBidJobs.filter(allBidJob => allBidJob.bidderEmail === user?.email)

  return (
    <div className="pt-10 text-black">
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
