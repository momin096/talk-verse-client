import { Link, useLocation, useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import toast from 'react-hot-toast'
import loginAnnimation from '../../assets/login.json'
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { signIn, googleSignIn } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state || '/';

    const handleShowPassword = () => {
        setShowPassword(!showPassword);

    }

    const handleLogIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                if (result.user) {

                    toast.success('Login Success')
                    navigate(from)
                }

            })
            .catch(err => {
                toast.error(err.message)
            })
    }


    // Google Sign in 
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                if (result.user) {
                    toast.success('Login Success')
                    navigate(from)
                }

            })
            .catch(err => {
                toast.error(err.message)
            })
    }



    return (
        <div className=''>
            {/* <Navbar /> */}
            <div className="min-h-[calc(100vh-30px)] flex flex-col lg:flex-row-reverse items-center justify-center bg-base-100 px-4">
                <div>
                    <Lottie animationData={loginAnnimation} />
                </div>
                <div className="w-full max-w-md space-y-4">
                    <h2 className="text-3xl font-semibold">Log in</h2>
                    <p>
                        <Link to="/register" className="">
                            Don't Have An Account ? <span className='hover:underline hover:text-red-800'>Register</span>
                        </Link>
                    </p>

                    <div className="space-y-2">
                        <button onClick={handleGoogleSignIn} className="btn w-full border border-base-content bg-base-100 hover:bg-base-200">
                            <img className="w-5 mr-2" src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" />
                            Continue with Google
                        </button>

                    </div>

                    <div className="divider">or</div>

                    <form onSubmit={handleLogIn} className="space-y-3">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="Your Email" className="input input-bordered w-full pr-10" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                                <input name='password' type={`${showPassword ? 'text' : 'password'}`} placeholder="Your password" className="input input-bordered w-full pr-10" />
                                <span onClick={handleShowPassword} className="absolute inset-y-0 right-3 flex items-center cursor-pointer">
                                    {
                                        showPassword ? <FaEyeSlash className='text-xl' /> : <FaEye className='text-xl' />
                                    }
                                </span>
                            </div>

                        </div>


                        <button className="btn bg-pink-500 hover:bg-pink-600 text-white w-full">
                            Log in
                        </button>
                    </form>

                    <p className="text-xs text-center text-base-content">
                        By clicking Log in or Continue with, you agree to Preply’s{" "}
                        <Link to="/terms" className="link link-hover text-primary">Terms of Use</Link> and{" "}
                        <Link to="/privacy" className="link link-hover text-primary">Privacy Policy</Link>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;