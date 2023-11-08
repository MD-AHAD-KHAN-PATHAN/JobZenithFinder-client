import { useEffect, useState } from "react";
import UseHooks from "../../Components/Hooks/UseHooks";
import BidTable from "./BidTable";
import { Helmet } from "react-helmet";

const MyBids = () => {

    const { user } = UseHooks();
    const [myBidJobs, setMyBidJobs] = useState([]);

    const sellerMail = user.email;

    useEffect(() => {
        fetch(`http://localhost:5000/mybid?sellerMail=${sellerMail}`, {credentials: 'include'})
            .then(res => res.json())
            .then(data => {
                setMyBidJobs(data);
            })
    }, [sellerMail])

    myBidJobs.sort((a, b) => {
        const statusOrder = ['complete', 'in progress', 'pending', 'rejected'];
        return statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status);
    });


    return (
        <>
        <Helmet>
                <meta charSet="utf-8" />
                <title>JobZenith | My Bids</title>
                <link rel="canonical" href="https://i.ibb.co/PcrP9Rb/favicon-4.png" />
            </Helmet>
        <div>
            {
                myBidJobs.length > 0 ? <div className="min-h-[60vh] my-20">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Deadline</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    myBidJobs.map(item => <BidTable key={item._id} item={item}></BidTable>)
                                }

                            </tbody>
                            {/* foot */}
                            <tfoot>
                                <tr>
                                    <th>Name</th>
                                    <th>Deadline</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </tfoot>

                        </table>
                    </div>
                </div> : <div className="h-[60vh] flex justify-center items-center"><h1 className="text-3xl font-bold text-red-500"> you do not bid for job</h1></div>
            }

        </div>
        </>
    );
};

export default MyBids;