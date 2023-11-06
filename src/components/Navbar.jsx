import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut().then().catch();
  };
  return (
    <div className="bg-slate-800">
      <div>
        <div className="navbar max-w-7xl mx-auto   text-white rounded  border-black">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>

                <li>
                  <NavLink to="/addJob">Add Job</NavLink>
                </li>
                <li>
                  <NavLink to="/myPostedJobs">My Jobs</NavLink>
                </li>
                <li>
                  <NavLink to="/myBids">My Bids</NavLink>
                </li>
                <li>
                  <NavLink to="/bidRequests">Bid Requests</NavLink>
                </li>
              </ul>
            </div>
            <img
              className="h-16 w-40"
              src="https://i.ibb.co/gM2XnKf/Black-White-Elegant-Monogram-Initial-Name-Logo-1.png"
              alt=""
            />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink  to="/">Home</NavLink>
              </li>

              <li>
              <NavLink to="/addJob">Add Job</NavLink>
              </li>
              <li>
                <NavLink to="/myPostedJobs">My Jobs</NavLink>
              </li>
              <li>
                <NavLink to="/myBids">My Bids</NavLink>
              </li>
              <li>
                <NavLink to="/bidRequests">Bid Requests</NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <div className="flex items-center gap-1 md:gap-4 ">
                <div className="flex items-center gap-2">
                  <p className="text-blue-gray-700  text-xs font-bold">
                    {user?.displayName}
                  </p>
                  <img
                    className="rounded-full w-8 md:w-12 border-2 border-black"
                    src={user?.photoURL}
                    alt=""
                  />
                </div>
                <Link
                  onClick={handleLogOut}
                  className="btn bg-blue-gray-900 text-black"
                  to="/login"
                >
                  LogOut
                </Link>
              </div>
            ) : (
              <Link className="py-1 px-2 rounded bg-black text-white" to="/login">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
