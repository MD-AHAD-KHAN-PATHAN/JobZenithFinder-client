import { TiTickOutline } from "react-icons/ti";
import { BiSolidUserAccount, BiFileFind, BiCloudUpload } from "react-icons/bi";

const JobZenithWork = () => {
    return (
        <>
            <h1 className='lg:text-5xl md:text-4xl text-3xl font-bold border-l-8 border-l-teal-600 p-4 mt-20 mb-10'>How JobZenith Work</h1>

            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-4 mb-20 bg-slate-100 py-20 px-10'>
                <div className='text-center hover:shadow-teal-500 hover:shadow-xl p-4'>
                    <a href="" className='flex justify-center text-teal-500 text-7xl'><BiSolidUserAccount></BiSolidUserAccount></a>
                    <h1 className='text-2xl font-bold my-4'>Create Account</h1>
                    <i>Join us today to enjoy exclusive benefits and personalized experiences.</i>
                </div>
                <div className='text-center hover:shadow-teal-500 hover:shadow-xl p-4'>
                    <a href="" className='flex justify-center text-teal-500 text-7xl'><BiFileFind></BiFileFind></a>
                    <h1 className='text-2xl font-bold my-4'>Find Suitable Job</h1>
                    <i>Explore a range of opportunities tailored to your skills and aspirations.</i>
                </div>
                <div className='text-center hover:shadow-teal-500 hover:shadow-xl p-4'>
                    <a href="" className='flex justify-center text-teal-500 text-7xl'><BiCloudUpload></BiCloudUpload></a>
                    <h1 className='text-2xl font-bold my-4'>Upload CV/Resume</h1>
                    <i>Easily upload your CV/Resume and make a standout impression to potential employers.</i>
                </div>
                <div className='text-center hover:shadow-teal-500 hover:shadow-xl p-4'>
                    <a href="" className='flex justify-center text-teal-500 text-7xl'><TiTickOutline></TiTickOutline></a>
                    <h1 className='text-2xl font-bold my-4'>Apply Job</h1>
                    <i>Apply for your desired job with a single click and kickstart your career journey.</i>
                </div>

            </div>
        </>

    );
};

export default JobZenithWork;