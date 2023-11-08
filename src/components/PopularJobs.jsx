const PopularJobs = () => {
  return (
    <div className="max-w-7xl mx-auto my-10 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <div className="card w-72 h-72 bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src="https://i.ibb.co/z6mcCy7/Black-Minimalist-Mountain-Letter-M-Logo-1.png"
            alt="web Dev"
          />
        </figure>
        <div className="card-body my-10 font-bold justify-center items-center">
          <h2 className="card-title text-center text-3xl">Website Development</h2>
        </div>
      </div>
      <div className="card w-72 h-72 bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src="https://i.ibb.co/NtXkmnZ/Black-Minimalist-Mountain-Letter-M-Logo-2.png"
            alt="web Dev"
          />
        </figure>
        <div className="card-body my-10 font-bold justify-center items-center">
          <h2 className="card-title text-center text-3xl">Graphics Design</h2>
        </div>
      </div>
      <div className="card w-72 h-72 bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src="https://i.ibb.co/whqYTcc/Black-Minimalist-Mountain-Letter-M-Logo-3.png"
            alt="web Dev"
          />
        </figure>
        <div className="card-body my-10 font-bold justify-center items-center">
          <h2 className="card-title text-center text-3xl">Digital Marketing</h2>
        </div>
      </div>
      <div className="card w-72 h-72 bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src="https://i.ibb.co/wMc5p44/Black-Minimalist-Mountain-Letter-M-Logo-4.png"
            alt="web Dev"
          />
        </figure>
        <div className="card-body my-10 font-bold justify-center items-center">
          <h2 className="card-title text-center text-3xl">Lead Generation</h2>
        </div>
      </div>
    </div>
  );
};

export default PopularJobs;
