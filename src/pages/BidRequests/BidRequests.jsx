import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BidRequestTableRow from "./BidRequestTableRow";

const BidRequests = () => {
  const [allBidRequests, setAllBidRequests] = useState([]);
  const { user } = useContext(AuthContext);

 
  useEffect(() => {
    // Replace the URL with the correct endpoint to fetch bid requests
    fetch('http://localhost:5000/bidJob',{credentials:'include'})
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
    <div className=" text-black">
        <div
        className="hero h-96"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/XXCM4Sq/White-and-Blue-Playful-Illustration-Career-Guides-Linked-In-Article-Cover-Image-1.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content content-start text-neutral-content">
          <div className="max-w-md">
          <h2 className="text-4xl font-bold text-center">
          Bid Requests
        </h2>
          </div>
        </div>
      </div>
      {
        bidRequests.length>0 ? <div className="overflow-x-auto max-w-7xl mx-auto my-20">
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
      </div> : <div className="max-w-7xl mx-auto text-center my-44">You Have No Bid Requests</div>
      }
    </div>
  );
};

export default BidRequests;