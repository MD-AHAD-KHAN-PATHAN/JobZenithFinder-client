import { useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";


const UpdateJobPost = () => {

    const data = useLoaderData();
    const { _id, email, title, deadline, description, maximum, minimum, photo, jobCategory } = data;

    const [category, setCategory] = useState(jobCategory);

    const handleAddJob = (e) => {

        e.preventDefault();

        const form = e.target;

        const email = form.email.value;
        const title = form.title.value;
        const deadline = form.deadline.value;
        const description = form.description.value;
        const maximum = form.maximum.value;
        const minimum = form.minimum.value;
        const photo = form.photo.value;

        let jobCategory = category.toUpperCase();

        const jobDetails = { email, title, deadline, description, maximum, minimum, photo, jobCategory }

        console.log(jobDetails)



        fetch(`https://job-zenith-server.vercel.app/job/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Good Job!',
                        text: 'Your job details updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    const handleCategory = (e) => {
        const value = e.target.value;
        if (value) {
            setCategory(value);
        }
        else {
            setCategory(jobCategory);
        }

    }

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>JobZenith | My Posted Job | Update</title>
                <link rel="canonical" href="https://i.ibb.co/sRJ2JKY/favicon-3.png" />
            </Helmet>
            <div className="bg-teal-50 lg:p-20 md:p-10 p-4">
                <h1 className="text-5xl font-bold text-center mb-4">Update <span className='text-teal-500'>Data</span></h1>
                <div className="flex justify-center"><h1 className="w-20 px-6 py-1 bg-teal-500 mb-10"></h1></div>

                <form onSubmit={handleAddJob}>
                    <div className="md:flex gap-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <label className="input-group">
                                <input type="email" name="email" defaultValue={email} readOnly className="input w-full" required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Job Title</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="title" defaultValue={title} placeholder="Enter job title" className="input w-full" required />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex gap-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Deadline</span>
                            </label>
                            <label className="input-group">
                                <input type="date" name="deadline" defaultValue={deadline} className="input w-full" required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="description" defaultValue={description} placeholder="Enter job description" className="input w-full" required />
                            </label>
                        </div>

                    </div>
                    <div className="md:flex gap-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Maximum salary</span>
                            </label>
                            <label className="input-group">
                                <input type="number" name="maximum" defaultValue={maximum} placeholder="Enter Maximum salary" className="input w-full" required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Minimum salary</span>
                            </label>
                            <label className="input-group">
                                <input type="number" name="minimum" defaultValue={minimum} placeholder="Enter Minimum salary" className="input w-full" required />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex gap-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <label className="input-group">
                                <input type="url" name="photo" defaultValue={photo} placeholder="Enter Maximum salary" className="input w-full" required />
                            </label>
                        </div>
                        <div className="md:w-1/2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select name="" id="" defaultValue={category} onChange={handleCategory} className="p-3 rounded-md input-group">
                                <option value="">Select a Category</option>
                                <option value="web development">web development</option>
                                <option value="digital marketing">digital marketing</option>
                                <option value="graphics design">graphics design</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <div className="mt-6">
                            <input type="submit" value="Update Data" className="py-2 font-bold w-full bg-white border-2 border-teal-500 cursor-pointer hover:bg-teal-500 hover:text-white" />
                        </div>
                    </div>
                    <ToastContainer></ToastContainer>
                </form>
            </div>
        </>
    );
};

export default UpdateJobPost;