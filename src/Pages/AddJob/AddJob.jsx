import { toast } from "react-toastify";
import UseHooks from "../../Components/Hooks/UseHooks";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AddJob = () => {

    const { user } = UseHooks();
    const navigate = useNavigate()
    const [category, setCategory] = useState('');

    function slow() {
        navigate('/mypostedjob');
    }

    const handleCategory = (e) => {
        const value = e.target.value;
        setCategory(value);
    }

    const handleAddJob = (e) => {

        e.preventDefault();

        const form = e.target;

        const email = form.email.value;
        const title = form.title.value;
        const deadline = form.deadline.value;
        const description = form.description.value;
        const maximum = form.maximum.value;
        const minimum = form.minimum.value;

        const jobDetails = { email, title, deadline, description, maximum, minimum, category }

        console.log(jobDetails)

        // fetch('https://brand-shop-server-ten-kappa.vercel.app/car', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(jobDetails)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         if (data.insertedId) {
        //             toast.success('Job posted successfully');
        //             form.reset();
        //             setTimeout(slow, 2000);
        //         }
        //     })
    }

    return (
        <div className="bg-teal-50 lg:p-20 md:p-10 p-4">
            <h1 className="text-5xl font-bold text-center mb-4">Add <span className='text-teal-500'>Job</span></h1>
            <div className="flex justify-center"><h1 className="w-20 px-6 py-1 bg-teal-500 mb-10"></h1></div>

            <form onSubmit={handleAddJob}>
                <div className="md:flex gap-6">
                    <div className="form-control md:w-1/2" data-aos="zoom-in-down" data-aos-duration="1000">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email" name="email" defaultValue={user.email} readOnly className="input w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2" data-aos="zoom-in-down" data-aos-duration="1000">
                        <label className="label">
                            <span className="label-text">Job Title</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="title" placeholder="Enter job title" className="input w-full" required />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-6">
                    <div className="form-control md:w-1/2" data-aos="zoom-in-down" data-aos-duration="1000">
                        <label className="label">
                            <span className="label-text">Deadline</span>
                        </label>
                        <label className="input-group">
                            <input type="date" name="deadline" className="input w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2" data-aos="zoom-in-down" data-aos-duration="1000">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Enter job description" className="input w-full" required />
                        </label>
                    </div>

                </div>
                <div className="md:flex gap-6">
                    <div className="form-control md:w-1/2" data-aos="zoom-in-down" data-aos-duration="1000">
                        <label className="label">
                            <span className="label-text">Maximum salary</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="maximum" placeholder="Enter Maximum salary" className="input w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2" data-aos="zoom-in-down" data-aos-duration="1000">
                        <label className="label">
                            <span className="label-text">Minimum salary</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="minimum" placeholder="Enter Minimum salary" className="input w-full" required />
                        </label>
                    </div>
                </div>
                <div className="flex gap-6 mt-6">
                    <select name="" id="" value={category} onChange={handleCategory} className="w-full p-4 rounded-md input-group">
                        <option value="">Job Category</option>
                        <option value="web development">web development</option>
                        <option value="digital marketing">digital marketing</option>
                        <option value="graphics design">graphics design</option>
                    </select>
                </div>
                <div>
                    <div className="mt-6">
                        <input type="submit" value="Add Job" className="py-2 font-bold w-full bg-white border-2 border-teal-500 cursor-pointer hover:bg-teal-500 hover:text-white" data-aos="fade-up" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddJob;