import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="max-w-7xl  mx-auto my-20">
            <img src="https://i.ibb.co/JCYwCF1/f.jpg" alt="404 error" />
            <div className="flex items-center justify-center my-10">
            <Link className="btn " to='/'>Bact to home</Link>
            </div>
        </div>
    );
};

export default Error;