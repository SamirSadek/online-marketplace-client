import { Link } from "react-router-dom";

const GraphicsDesignCard = ({ graphicsJob }) => {
  const {
    _id,
    employerEmail,
    title,
    deadline,
    category,
    minPrice,
    maxPrice,
    description,
  } = graphicsJob;
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
          <Link to={`jobDetail/${_id}`}>
            <button className="btn bg-base-300 hover:bg-slate-700 hover:text-white">
              Bid Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GraphicsDesignCard;
