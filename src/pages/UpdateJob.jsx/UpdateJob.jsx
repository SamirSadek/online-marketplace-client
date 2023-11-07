import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateJob = () => {
  const job = useLoaderData();
  const {
    _id,
    employerEmail,
    title,
    deadline,
    category,
    minPrice,
    maxPrice,
    description,
  } = job;

  const handleUpdate = (event) => {
    
    
    event.preventDefault();

    const form = event.target;
    const employerEmail = form.employerEmail.value;
    const title = form.title.value;
    const deadline = form.deadline.value;
    const category = form.category.value;
    const minPrice = form.minPrice.value;
    const maxPrice = form.maxPrice.value;
    const description = form.description.value;
    const updatedJob = {
      
      employerEmail,
      title,
      deadline,
      category,
      minPrice,
      maxPrice,
      description,
    };

    console.log(updatedJob);
    // send data to server
    fetch(`http://localhost:5000/addJob/${_id}`,{
      method: 'PUT',
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify(updatedJob)
    })
    .then(res  =>res.json())
    .then(data =>{
      console.log(data)
      if(data.modifiedCount){
        Swal.fire({
          title: "Successful",
          text:'Job Updated Successfully',
          icon:'success',
          confirmButtonText:'Cool'
        })
      }
    })
  }
   

  return (
    <div className="bg-slate-400 py-4"><h2 className="text-4xl font-bold text-center w-1/2 mx-auto border-t-8 border-t-white text-white rounded p-4 bg-slate-800">Update Job: {title}</h2>
    <div className=" bg-slate-400 p-20 w-2/3 mx-auto">
      
    
      <form className=""  onSubmit={handleUpdate}>
        <div className="md:flex gap-10 justify-center ">
          <div className="form-control w-full ">
            <label className="label">
              <span className="text-2xl font-bold text-slate-900">Employer Email</span>
            </label>
            <input
              type="text"
              name="employerEmail"
              defaultValue={employerEmail}
              readOnly
              className="input input-bordered border-slate-900 w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="text-2xl font-bold text-slate-900">Job Title</span>
            </label>
            <input
              type="text"
              name="title"
              defaultValue={title}
              required
              className="input input-bordered border-slate-900 w-full "
            />
          </div>
        </div>
        <div className="md:flex gap-10 justify-center">
          <div className="form-control w-full ">
            <label className="label">
              <span className="text-2xl font-bold text-slate-900">Deadline</span>
            </label>
            <input
              type="Date"
              name="deadline"
              defaultValue={deadline}
              required
              className="input input-bordered border-slate-900 w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="text-2xl font-bold text-slate-900">Category</span>
            </label>
            
            <select name="category" className="input input-bordered border-slate-900 w-full">
              <option value="web development">Web Development</option>
              <option value="digital marketing">Digital Marketing</option>
              <option value="graphics design">Graphics Design</option>
            </select>
          </div>
        </div>
        <div className="md:flex gap-10 justify-center">
          <div className="form-control w-full ">
            <label className="label">
              <span className="text-2xl font-bold text-slate-900">Minimum Price</span>
            </label>
            <input
              type="number"
              name="minPrice"
              required
              defaultValue={minPrice}
              className="input input-bordered border-slate-900 w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="text-2xl font-bold text-slate-900">Maximum Price</span>
            </label>
            <input
              type="number"
              name="maxPrice"
              defaultValue={maxPrice}
              required
              className="input input-bordered border-slate-900 w-full "
            />
          </div>
        </div>

        <div className="form-control w-full ">
          <label className="label">
            <span className="text-2xl font-bold text-slate-900">Description</span>
          </label>
          <input
            type="textarea"
            name="description"
            defaultValue={description}
            required
            className="input input-bordered border-slate-900 w-full "
          />
        </div>

        <div className="mt-8 w-full  text-center ">
          <input
            className="md:w-1/4 btn  btn-ghost border border-slate-900 bg-slate-800 text-white"
            type="submit"
            value="Update Job"
          />
        </div>
      </form>
    </div>
    </div>
  );
};

export default UpdateJob;
