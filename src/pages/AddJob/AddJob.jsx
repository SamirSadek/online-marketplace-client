
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const AddJob = () => {

  const {user} = useContext(AuthContext)

  const handleAddJob = (event) => {
    
    
    event.preventDefault();

    const form = event.target;
    const employerEmail = form.employerEmail.value;
    const title = form.title.value;
    const deadline = form.deadline.value;
    const category = form.category.value;
    const minPrice = form.minPrice.value;
    const maxPrice = form.maxPrice.value;
    const description = form.description.value;
    const newJob = {
      employerEmail,
      title,
      deadline,
      category,
      minPrice,
      maxPrice,
      description,
    };

    console.log(newJob);
    // send data to server
    fetch('http://localhost:5000/addJob',{
      method: 'POST',
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify(newJob)
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
        })
      }
    })
  }
   
  return (
    <div><h2 className="text-4xl font-bold text-center mt-4 w-1/2 mx-auto border border-slate-900 rounded p-4 bg-slate-200">Post Your Job</h2>
    <div className="bg-white p-20 w-2/3 mx-auto">
      
    
      <form  onSubmit={handleAddJob}>
        <div className="md:flex gap-10 justify-center ">
          <div className="form-control w-full ">
            <label className="label">
              <span className="text-2xl font-bold text-slate-900">Employer Email</span>
            </label>
            <input
              type="text"
              name="employerEmail"
              defaultValue={user?.email}
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
              placeholder="Job Title"
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
              placeholder="Minimum Price"
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
              placeholder="Maximum Price"
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
            placeholder="Enter Your Job Description"
            required
            className="input input-bordered border-slate-900 w-full "
          />
        </div>

        <div className="mt-8 w-full  text-center ">
          <input
            className="md:w-1/4 btn  btn-ghost border border-slate-900 bg-slate-200"
            type="submit"
            value="Add Job"
          />
        </div>
      </form>
    </div>
    </div>
  );
};

export default AddJob;
