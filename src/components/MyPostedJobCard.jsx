import { useState } from "react";
import Swal from "sweetalert2";

const MyPostedJobCard = ({ myPostedJob }) => {
  const {
    _id,
    employerEmail,
    title,
    deadline,
    category,
    minPrice,
    maxPrice,
    description,
  } = myPostedJob;

  const [isDeleted, setIsDeleted] = useState(false)

  const handleDelete = (id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/addJob/${id}`,{
            method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your posted Job has been deleted.",
                icon: "success",
              });
              setIsDeleted(true)
            }
          });
      }
    });
  };

  if (isDeleted) {
    return null;
  }
  return (
    <div className="card  my-5 bg-slate-700 text-white hover:bg-base-100 hover:text-black hover:border">
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title">{title}</h2>
          <h2 className="">Deadline: {deadline}</h2>
        </div>
        <p>{description}</p>
        <div className="flex justify-between items-center">
          <h2>
            Price Range:{minPrice}$-{maxPrice}$
          </h2>
          <div className="flex gap-5">
            <button className="btn bg-base-300 hover:bg-slate-700 hover:text-white">
              Update
            </button>
            <button
              onClick={() => handleDelete(_id)}
              className="btn hover:bg-red-700 hover:text-white"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPostedJobCard;
