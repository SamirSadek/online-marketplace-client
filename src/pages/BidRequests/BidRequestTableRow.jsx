import React from "react";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
const BidRequestTableRow = ({ bidRequest }) => {
  const { _id, jobTitle, bidderEmail, deadline, bidAmount, status } = bidRequest;
  const [currentStatus, setCurrentStatus] = useState(status);

  useEffect(() => {
    fetch(`https://online-marketplace-server-five.vercel.app/bidJob/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentStatus(data.status);
      })
      .catch((error) => {
        console.error("Error fetching bid request status:", error);
      });
  }, [_id]);

  const acceptHandle = (id) => {
    fetch(`https://online-marketplace-server-five.vercel.app/bidJob/${id}`, {
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
            confirmButtonText: 'Cool',
          });
          setCurrentStatus('In Progress');
        }
      })
      .catch((error) => {
        console.error("Error accepting bid:", error);
      });
  };

  const cancelHandle = (id) => {
    fetch(`https://online-marketplace-server-five.vercel.app/bidJob/${id}`, {
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
            confirmButtonText: 'Cool',
          });
          setCurrentStatus('Rejected');
        }
      })
      .catch((error) => {
        console.error("Error accepting bid:", error);
      });
  };

  const isStatusInProgress = currentStatus === 'In Progress';

  return (
    <tr>
      <td>{jobTitle}</td>
      <td>{bidderEmail}</td>
      <td>{deadline}</td>
      <td>{bidAmount}$</td>
      <td>{currentStatus}</td>
      <td>
        <div className="flex gap-3">
          {isStatusInProgress && (
            <ProgressBar
            percent={75}
            filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
          />
          )}
          <button
            onClick={() => acceptHandle(_id)}
            className={`btn btn-sm bg-green-400 p-1 rounded ${
              currentStatus !== 'pending' ? 'disabled' : ''
            }`}
            disabled={currentStatus !== 'pending'}
          >
            Accept
          </button>
          <button
            onClick={() => cancelHandle(_id)}
            className={`btn btn-sm bg-red-400 p-1 rounded ${
              currentStatus !== 'pending' ? 'disabled' : ''
            }`}
            disabled={currentStatus !== 'pending'}
          >
            Cancel
          </button>
        </div>
      </td>
    </tr>
  );
};

export default BidRequestTableRow;




// import { useState, useEffect } from "react";
// import Swal from "sweetalert2";

// const BidRequestTableRow = ({ bidRequest }) => {
//   const { _id, jobTitle, bidderEmail, deadline, bidAmount, status } = bidRequest;
//   const [currentStatus, setCurrentStatus] = useState(status); 

//   useEffect(() => {
   
//     fetch(`https://online-marketplace-server-five.vercel.app/bidJob/${_id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setCurrentStatus(data.status); 
//       })
//       .catch((error) => {
//         console.error("Error fetching bid request status:", error);
//       });
//   }, [_id]);

//   const acceptHandle = (id) => {
//     fetch(`https://online-marketplace-server-five.vercel.app/bidJob/${id}`, {
//       method: 'PATCH',
//       headers: {
//         'content-type': 'application/json',
//       },
//       body: JSON.stringify({ status: 'In Progress' }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         if (data.modifiedCount > 0) {
//           Swal.fire({
//             title: "Successfully update status",
//             text: 'Do you want to continue',
//             icon: 'success',
//             confirmButtonText: 'Cool'
//           });
//           setCurrentStatus('In Progress'); 
//         }
//       })
//       .catch((error) => {
//         console.error("Error accepting bid:", error);
//       });
//   };

//   const cancelHandle = (id) => {
//     fetch(`https://online-marketplace-server-five.vercel.app/bidJob/${id}`, {
//       method: 'PATCH',
//       headers: {
//         'content-type': 'application/json',
//       },
//       body: JSON.stringify({ status: 'Rejected' }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         if (data.modifiedCount > 0) {
//           Swal.fire({
//             title: "Successfully update status",
//             text: 'Do you want to continue',
//             icon: 'success',
//             confirmButtonText: 'Cool'
//           });
//           setCurrentStatus('Rejected');
//         }
//       })
//       .catch((error) => {
//         console.error("Error accepting bid:", error);
//       });
//   };

//   return (
//     <tr>
//       <td>{jobTitle}</td>
//       <td>{bidderEmail}</td>
//       <td>{deadline}</td>
//       <td>{bidAmount}$</td>
//       <td>{currentStatus}</td> 
//       <td>
//         {currentStatus !== 'pending' ? (
//           <div className="flex gap-3">
//             <button
//               onClick={() => acceptHandle(_id)}
//               className={`btn btn-sm bg-green-400 p-1 rounded`}
//               disabled
//             >
//               Accept
//             </button>
//             <button
//               onClick={() => cancelHandle(_id)}
//               className={`btn btn-sm bg-red-400 p-1 rounded`}
//               disabled
//             >
//               Cancel
//             </button>
//           </div>
//         ) : (
//           <div className="flex gap-3">
//             <button
//               onClick={() => acceptHandle(_id)}
//               className={`btn btn-sm bg-green-400 p-1 rounded `}
//             >
//               Accept
//             </button>
//             <button
//               onClick={() => cancelHandle(_id)}
//               className={`btn btn-sm bg-red-400 p-1 rounded`}
//             >
//               Cancel
//             </button>
//           </div>)
//         }
//       </td>
//     </tr>
//   );
// };

// export default BidRequestTableRow;
