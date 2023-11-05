import { toast } from "react-toastify";
import UseHooks from "../../Components/Hooks/UseHooks";
import { Navigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleLogin} = UseHooks();

    function slow(){
        Navigate(location?.state ? location.state : '/');
    }

    const handleLogin = () => {
        googleLogin()
        .then(() => {
            toast.success('Successfully Login');
            setTimeout(slow, 2000);
        })
        .then((error) => toast.error(error.message))
    }
    return (
        <>
            <div className="divider text-teal-500">continue with</div>
            <div className="">
                <button onClick={handleLogin} className="btn bg-white  hover:bg-teal-400 hover:text-white text-teal-500 border-1 border-teal-400">Google</button>
            </div>
        </>
    );
};

export default SocialLogin;