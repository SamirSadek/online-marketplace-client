

import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const BidRequestTableRow = ({ bidRequest }) => {
  const { _id, jobTitle, bidderEmail, deadline, bidAmount, status } = bidRequest;
  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(status); 

  useEffect(() => {
   
    fetch(`http://localhost:5000/bidJob/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentStatus(data.status); 
        setButtonsDisabled(data.status !== 'pending');
      })
      .catch((error) => {
        console.error("Error fetching bid request status:", error);
      });
  }, [_id]);

  const acceptHandle = (id) => {
    fetch(`http://localhost:5000/bidJob/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ status: 'In Progress' }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Successfully update status",
            text: 'Do you want to continue',
            icon: 'success',
            confirmButtonText: 'Cool'
          });
          setCurrentStatus('In Progress'); 
        }
      })
      .catch((error) => {
        console.error("Error accepting bid:", error);
      });
  };

  const cancelHandle = (id) => {
    fetch(`http://localhost:5000/bidJob/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ status: 'Rejected' }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Successfully update status",
            text: 'Do you want to continue',
            icon: 'success',
            confirmButtonText: 'Cool'
          });
          setCurrentStatus('Rejected');
        }
      })
      .catch((error) => {
        console.error("Error accepting bid:", error);
      });
  };

  return (
    <tr>
      <td>{jobTitle}</td>
      <td>{bidderEmail}</td>
      <td>{deadline}</td>
      <td>{bidAmount}$</td>
      <td>{currentStatus}</td> 
      <td>
        {currentStatus !== 'pending' ? (
          <div className="flex gap-3">
            <button
              onClick={() => acceptHandle(_id)}
              className={`btn btn-sm bg-green-400 p-1 rounded ${buttonsDisabled ? "disabled" : ""}`}
              disabled
            >
              Accept
            </button>
            <button
              onClick={() => cancelHandle(_id)}
              className={`btn btn-sm bg-red-400 p-1 rounded ${buttonsDisabled ? "disabled" : ""}`}
              disabled
            >
              Cancel
            </button>
          </div>
        ) : (
          <div className="flex gap-3">
            <button
              onClick={() => acceptHandle(_id)}
              className={`btn btn-sm bg-green-400 p-1 rounded ${buttonsDisabled ? "disabled" : ""}`}
            >
              Accept
            </button>
            <button
              onClick={() => cancelHandle(_id)}
              className={`btn btn-sm bg-red-400 p-1 rounded ${buttonsDisabled ? "disabled" : ""}`}
            >
              Cancel
            </button>
          </div>)
        }
      </td>
    </tr>
  );
};

export default BidRequestTableRow;
