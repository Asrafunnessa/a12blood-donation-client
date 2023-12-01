/* eslint-disable no-undef */
// import img from '../../assets/images/login/login.svg'
// import { Link } from 'react-router-dom';

// const Registration = () => {

//     const handleSignUp = e => {
//         e.preventDefault();
//     }

//     return (
//         <div className="hero min-h-screen bg-base-200">
//         <div className="hero-content flex-col lg:flex-row">
//             <div className="w-1/2 mr-12">
//                 <img src={img} alt="" />
//             </div>
//             <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//                 <div className="card-body">
//                     <h1 className="text-3xl text-center font-bold">Sign Up</h1>
//                     <form  onSubmit={handleSignUp}>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Name</span>
//                             </label>
//                             <input type="text" name='name' placeholder="name" className="input input-bordered" />
//                         </div>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Email</span>
//                             </label>
//                             <input type="text" name='email' placeholder="email" className="input input-bordered" />
//                         </div>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Confirm Password</span>
//                             </label>
//                             <input type="password" name='password' placeholder="password" className="input input-bordered" />
//                             <label className="label">
//                                 <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//                             </label>
//                         </div>
//                         <div className="form-control mt-6">
//                             <input className="btn btn-primary" type="submit" value="Sign Up" />
//                         </div>
//                     </form>
//                     <p className='my-4 text-center'>Already Have an Account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
//                 </div>
//             </div>
//         </div>
//     </div>
//     );
// };

// export default Registration;

/* eslint-disable no-undef */
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useLocation, useNavigate } from "react-router-dom";

// const auth = getAuth();

const Registration = () => {

    const { createUser } = useContext(AuthContext);
    const { createNewUser} =useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();


    const handleSignUp = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);

        const email = form.get("email");
        const photo = form.get("photo");
        const password = form.get("password");
        const name = form.get("name");
        console.log(email, password, name, photo);

        
        createUser(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.error(error);
        })

        createNewUser(email, password)
        .then (() => {
            updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photo,
            })
            .then(() => {})
            .catch((error) => {
                console.log(error);
            });
            console.log(result.user);
            navigate(location?.state ? location.state : "/");
            
        })
    }
    


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Sign Up</h1>
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>Already Have an Account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;