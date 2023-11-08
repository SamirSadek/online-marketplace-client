import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const JobDetail = () => {
    const {user}= useContext(AuthContext)
  const jobDetails = useLoaderData();
  const navigate =useNavigate()
  const {
    _id,
    employerEmail,
    title,
    deadline,
    category,
    minPrice,
    maxPrice,
    description,
  } = jobDetails;

  const [isButtonDisabled, setIsButtonDisabled] = useState(employerEmail === user?.email);

  const handleBidJob = e =>{
    e.preventDefault()
    const form = e.target;
    const bidAmount = form.bidAmount.value;
    const deadline = form.deadline.value;
    const employerEmail = form.employerEmail.value;
    const bidderEmail = form.bidderEmail.value;
    const jobTitle = title
    const bidJob = {
      bidAmount,
      deadline,
      employerEmail,
      bidderEmail,
      jobTitle,
      maxPrice,
      description,
      status : 'pending'
    };
    console.log(bidJob);

    fetch('https://online-marketplace-server-five.vercel.app/bidJob',{
      method: 'POST',
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify(bidJob)
    })
    .then(res  =>res.json())
    .then(data =>{
      console.log(data)
      if(data.insertedId){
        Swal.fire({
          title: "Successfully Added",
          text:'Do you want to continue',
          icon:'success',
          confirmButtonText:'Cool'
        }).then(() => {
          navigate("/myBids"); // Navigate to the home page or any other route
        });
        
      }
      
    })
  }
  return (
    <div className="py-10 bg-slate-400 text-black">
      <div className="max-w-7xl mx-auto items-center ">
        <h2 className="text-center text-2xl font-bold my-5">{title}</h2>
        <p className="p-5">{description}</p>
        <div className="flex justify-between p-5">
          <h2 className="">Price Range: {minPrice}$-{maxPrice}$</h2>
          <h2 className="">Deadline: {deadline}</h2>
        </div>
      </div>
      <form onSubmit={handleBidJob} action="" className="max-w-7xl mx-auto p-5">
      <div className="md:flex gap-10 justify-center">
          <div className="form-control w-full ">
            <label className="label">
              <span className="text-2xl font-bold text-black">Bid Amount</span>
            </label>
            <input
              type="number"
              name="bidAmount"
              required
              placeholder="Your bidding Amount"
              className="input input-bordered border-slate-900 w-full text-black"
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="text-2xl font-bold text-black">DeadLine</span>
            </label>
            <input
              type="date"
              name="deadline"
              defaultValue={deadline}
              placeholder="Maximum Price"
              readOnly
              className="input input-bordered border-slate-900 w-full text-black"
            />
          </div>
        </div>
      <div className="md:flex gap-10 justify-center ">
          <div className="form-control w-full ">
            <label className="label">
              <span className="text-2xl font-bold text-black">Buyer Email</span>
            </label>
            <input
              type="text"
              name="employerEmail"
              defaultValue={employerEmail}
              readOnly
              className="input input-bordered border-slate-900 w-full text-black"
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="text-2xl font-bold text-black">Your Email</span>
            </label>
            <input
              type="text"
              name="bidderEmail"
              defaultValue={user?.email}
              readOnly
              className="input input-bordered border-slate-900 w-full text-black"
            />
          </div>
        </div>
        <div className="mt-8 w-full  text-center ">
        {!isButtonDisabled ? (
          <input
            className="md:w-1/4 btn btn-ghost border border-slate-900 bg-white text-black hover:"
            type="submit"
            value="Bid this Job"
          />
        ) : (
          <button disabled className="md:w-1/4 btn btn-ghost border border-slate-900 bg-white text-gray-400 cursor-not-allowed">
            This Job Posted By You
          </button>
        )}
        </div>
      </form>
    </div>
  );
};

export default JobDetail;
