import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UseHooks from '../../Components/Hooks/UseHooks';
import SocialLogin from '../GoogleLogin/SocialLogin';

const Login = () => {

    const { loginUser } = UseHooks();
    const navigate = useNavigate();
    const location = useLocation();



    function slow() {
        navigate(location?.state ? location.state : '/');
    }

    const handleLogin = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        loginUser(email, password)
            .then(() => {
                toast.success('User login Successfull');
                setTimeout(slow, 2000);
            })
            .catch((error) => {
                toast.error(error.code);
            })

    }
    return (
        <>
            <div className="justify-center md:my-0 my-10">
                <div className="lg:hero-content lg:flex lg:flex-row-reverse md:m-20 mx-6">
                    <div className="text-center" data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500">
                        <img className='md:max-w-lg max-w-sm' src="https://i.ibb.co/HpVCpNh/undraw-Sign-in-re-o58h.png" alt="" />
                    </div>
                    <div className="card flex-shrink-0 max-w-3xl shadow-2xl" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                        <div className='bg-teal-600 p-6 text-white rounded-t-lg'>
                            <h1 className='text-3xl font-semibold'>Sign in</h1>
                            <label className="label font-semibold md:text-lg">
                                Don't have an account ? <Link to="/registration" className="label-text-alt md:text-lg link link-hover text-white font-bold underline ml-4">Create account</Link>
                            </label>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-teal-500">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="border-1 border-teal-400 input input-bordered w-full" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-teal-500">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="border-1 border-teal-400 input input-bordered" required />
                                </div>
                                <div className="form-control mt-6 p-0">
                                    <button className="btn bg-white  hover:bg-teal-400 hover:text-white text-teal-500 border-1 border-teal-400">Login</button>
                                    <ToastContainer></ToastContainer>
                                </div>
                            </form>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;