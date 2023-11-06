import { useLoaderData, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import UseHooks from "../../Components/Hooks/UseHooks";

const JobDetails = () => {

    const details = useLoaderData();
    const { email, title, deadline, description, maximum, minimum, photo, jobCategory } = details;

    const { user } = UseHooks();

    const navigate = useNavigate();

    const date = new Date();

    const currentDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

    function slow() {
        navigate('/mybids');
    }

    const handSubmit = (e) => {
        
        e.preventDefault();

        const form = e.target;

        const price = form.price.value;
        const SellerDeadline = currentDate;
        const sellerEmail = user.email;
        

        const status = 'pending';
        const ByerEmail = email;
        const ByerDeadline = deadline;

        const mybid = {sellerEmail, ByerEmail, title, photo, jobCategory, price, SellerDeadline, ByerDeadline, status}


        fetch('http://localhost:5000/mybid', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(mybid)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success('My Bid is Successfull');
                    setTimeout(slow, 2000);
                }
            })

    }

    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
                <img src={photo} alt="" />
                <h1 className="my-4 text-2xl font-bold">{jobCategory}</h1>
                <p><span className="text-xl font-bold">Job Deadline : </span>{deadline}</p>
                <p className="my-4"><span className="text-xl font-bold">Price Range : </span><span>$ {minimum} - $ {maximum}</span> <sub>/y</sub></p>
                <p className="text-justify my-4"><span className="text-xl font-bold">Job Descriptions : </span> {description}</p>
            </div>

            <div>

                <div className="lg:flex lg:flex-row-reverse">
                    <div className="flex-shrink-0 shadow-xl w-11/12" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                        <div className='bg-teal-600 px-6 h-32 flex items-center justify-center text-white'>
                            <div>
                                <h1 className='text-3xl font-bold'>PLACE YOUR BID</h1>
                            </div>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-teal-500">Bid Price</span>
                                    </label>
                                    <input type="number" name='price' placeholder="your bid amount" className="border-1 border-teal-400 input input-bordered w-full" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-teal-500">Deadline</span>
                                    </label>
                                    <input type="text" name='SellerDeadline' readOnly defaultValue={currentDate} placeholder="deadline" className="border-1 border-teal-400 input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-teal-500">Email</span>
                                    </label>
                                    <input type="email" name='email' defaultValue={user.email} readOnly className="border-1 border-teal-400 input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-teal-500">Buyer Email</span>
                                    </label>
                                    <input type="email" name='ByerEmail' defaultValue={email} readOnly className="border-1 border-teal-400 input input-bordered" required />
                                </div>

                                <div className="form-control mt-6 p-0">
                                    <button disabled={user.email === email} className="btn bg-white  hover:bg-teal-400 hover:text-white text-teal-500 border-1 border-teal-400">Bid on the job</button>
                                    <ToastContainer></ToastContainer>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default JobDetails;