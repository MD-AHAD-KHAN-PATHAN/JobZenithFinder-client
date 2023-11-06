import { useEffect, useState } from "react";
import UseHooks from "../../Components/Hooks/UseHooks";
import PostCard from "./PostCard";

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
        <div>
            {
                mypostedjobs.length > 0 ? <div className="min-h-screen my-20">
                    <div className="grid grid-cols-3 gap-4">
                        {
                            mypostedjobs?.map(item => <PostCard key={item._id} item={item} mypostedjobs={mypostedjobs} setMypostedJobs={setMypostedJobs}></PostCard>)
                        }
                    </div>
                </div> : <div className="h-[60vh] flex justify-center items-center"><h1 className="text-3xl font-bold text-red-500"> you do not post job</h1></div>
            }

        </div>

    );
};

export default MyPosted;