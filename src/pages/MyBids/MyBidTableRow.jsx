


import Swal from "sweetalert2";
import { useState } from "react";

const MyBidTableRow = ({ myBidJob }) => {
  const { _id, jobTitle, employerEmail, deadline, status } = myBidJob;
  const [currentStatus, setCurrentStatus] = useState(status);

  const handleComplete = (id) => {
    fetch(`https://online-marketplace-server-five.vercel.app/bidJob/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Completed" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Successfully updated status",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Cool",
          });
          setCurrentStatus("Completed");
        }
      })
      .catch((error) => {
        console.error("Error updating status:", error);
      });
  };

  return (
    <tr>
      <td>{jobTitle}</td>
      <td>{employerEmail}</td>
      <td>{deadline}</td>
      <td>{currentStatus}</td>
      <td>
        {currentStatus !== "In Progress" ? (
          <button onClick={() => handleComplete(_id)} className="btn btn-sm" disabled>
            Complete
          </button>
        ) : (
          <button onClick={() => handleComplete(_id)} className="btn btn-sm">
            Complete
          </button>)
        }
      </td>
    </tr>
  );
};

export default MyBidTableRow;