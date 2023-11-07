import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BidRequestTableRow from "./BidRequestTableRow";

const BidRequests = () => {
  const [allBidRequests, setAllBidRequests] = useState([]);
  const { user } = useContext(AuthContext);

 
  useEffect(() => {
    // Replace the URL with the correct endpoint to fetch bid requests
    fetch('http://localhost:5000/bidJob')
      .then((res) => res.json())
      .then((data) => {
        setAllBidRequests(data);
      })
      .catch((error) => {
        console.error("Error fetching bid requests:", error);
      });
  }, []);

  const bidRequests = allBidRequests.filter(allBidRequest=> allBidRequest.employerEmail === user.email)
  return (
    <div className="pt-10 text-black">
      <div className="overflow-x-auto max-w-7xl mx-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Title</th>
              <th>Bidder Email</th>
              <th>Deadline</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            
          {bidRequests.map((bidRequest) => 
                <BidRequestTableRow
                  key={bidRequest._id}
                  bidRequest={bidRequest}
                />)}
              
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BidRequests;