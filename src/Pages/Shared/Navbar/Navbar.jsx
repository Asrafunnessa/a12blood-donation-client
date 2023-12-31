import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
        .then(() => {})
        .catch( error => console.log(error))
    }

    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/donationRequests">Donation Requests</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/registration">Registration</Link></li>
    </>


    return (
        <>
        <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img src="logo.webp" alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                <p>{user?.displayName}</p>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src={user?.photoURL} alt="" />
                    </div>
                </label>
                {
                    user ?
                        <button onClick={handleLogOut} className="btn btn-outline btn-error mr-5">Sign Out</button>
                        :
                        <Link to="/login">
                            <button className="btn btn-outline btn-error mr-5">Login</button>
                        </Link>
                }
            </div>
        </div>
    </>
    );
};

export default Navbar;