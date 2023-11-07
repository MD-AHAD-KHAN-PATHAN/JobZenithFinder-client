import { useEffect, useState } from "react";
import UseHooks from "../../Components/Hooks/UseHooks";
import PostCard from "./PostCard";
import { Helmet } from "react-helmet";

const MyPosted = () => {

    const { user } = UseHooks();

    const [mypostedjobs, setMypostedJobs] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/job?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMypostedJobs(data);
            })
    }, [user.email])

    return (
        <>
        <Helmet>
                <meta charSet="utf-8" />
                <title>JobZenith | My Posted Job</title>
                <link rel="canonical" href="https://i.ibb.co/Gvs72Kz/favicon-2.png" />
            </Helmet>
        <div>
            <h1 className='lg:text-5xl md:text-4xl text-3xl font-bold border-l-8 border-l-teal-600 p-4 mt-20'>My Posted Jobs</h1>

            {
                mypostedjobs.length > 0 ? <div className="min-h-screen lg:my-20 my-10">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 lg:mx-0 md:mx-10 mx-6">
                        {
                            mypostedjobs?.map(item => <PostCard key={item._id} item={item} mypostedjobs={mypostedjobs} setMypostedJobs={setMypostedJobs}></PostCard>)
                        }
                    </div>
                </div> : <div className="h-[80vh] flex justify-center items-center"><h1 className="text-3xl font-bold text-red-500"> you do not post job</h1></div>
            }

        </div>
        </>

    );
};

export default MyPosted;