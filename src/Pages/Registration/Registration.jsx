import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UseHooks from '../../Components/Hooks/UseHooks';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../GoogleLogin/SocialLogin';


const Registration = () => {

    const { createUser, profileUpdate } = UseHooks();
    const navigate = useNavigate();

    function slow() {
        navigate('/');
    }

    const handleRegistration = e => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const url = form.url.value;
        const password = form.password.value;

        if (password.length < 6) {
            return toast.error('Password must be at least 6 characters long.');
        }

        if (!/[A-Z]/.test(password)) {
            return toast.error('Password must contain at least one uppercase letter.');
        }

        if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
            return toast.error('Password must contain at least one special character.');
        }

        createUser(email, password)
            .then(() => {
                profileUpdate(name, url)
                    .then(() => {
                        toast.success('Registation Successfully');
                        setTimeout(slow, 2000);
                    })
                    .catch(error => toast.error(error.code))
            })
            .catch(error => {
                toast.error(error.code);
            })


    }

    return (
        <>
            <div className="md:my-20 my-10">
                <div className="md:hero-content md:mx-0 mx-6">
                    <div className="text-center md:text-left">
                        <img className='md:max-w-lg max-w-sm' src="https://i.ibb.co/x1dw8nN/undraw-Sign-up-n6im.png" alt="" />
                    </div>
                    <div className="card flex-shrink-0 max-w-2xl shadow-2xl bg-base-100">
                        <div className='bg-teal-600 p-6 text-white rounded-t-lg'>
                            <h1 className='text-3xl font-semibold'>create account</h1>
                            <label className="label font-semibold text-lg">
                                Already Have account ? <Link to="/login" className="label-text-alt link link-hover text-lg text-white font-bold underline">Please Login</Link>
                            </label>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleRegistration} className='grid grid-cols-2 gap-4'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-teal-500">Full Name</span>
                                    </label>
                                    <input type="name" name="name" placeholder="Full name" className="border-1 border-teal-500 input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-teal-500">Image Url</span>
                                    </label>
                                    <input type="text" name="url" placeholder="image url" className="border-1 border-teal-500 input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-teal-500">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="border-1 border-teal-500 input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-teal-500">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="border-1 border-teal-500 input input-bordered" required />
                                </div>
                                <div className="form-control mt-6 p-0 col-span-2">
                                    <button className="btn bg-white  hover:bg-teal-400 hover:text-white text-teal-500 border-1 border-teal-400">Register</button>
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

export default Registration;