import { useEffect, useState } from "react";
import UseHooks from "../../Components/Hooks/UseHooks";
import BidRequestTable from "./BidRequestTable";
import { Helmet } from "react-helmet";

const BidRequest = () => {

    const { user } = UseHooks();
    const [myBidRequested, setMyBidRequested] = useState([]);

    const email = user.email;

    useEffect(() => {
        fetch(`http://localhost:5000/mybid?email=${email}`)
            .then(res => res.json())
            .then(data => {
                setMyBidRequested(data);
            })
    }, [email])

    myBidRequested.sort((a, b) => {
        const statusOrder = ['complete', 'in progress', 'pending', 'rejected'];
        return statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status);
    });


    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>JobZenith | Bid Requests</title>
                <link rel="canonical" href="https://i.ibb.co/sRJ2JKY/favicon-3.png" />
            </Helmet>
            <div>
                {
                    myBidRequested.length > 0 ? <div className="min-h-[60vh] my-20">
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Bidding Price</th>
                                        <th>Deadline</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    {
                                        myBidRequested.map(item => <BidRequestTable key={item._id} item={item} myBidRequested={myBidRequested} setMyBidRequested={setMyBidRequested}></BidRequestTable>)
                                    }

                                </tbody>
                                {/* foot */}
                                <tfoot>
                                    <tr>
                                        <th>Name</th>
                                        <th>Bidding Price</th>
                                        <th>Deadline</th>
                                        <th>Status</th>
                                    </tr>
                                </tfoot>

                            </table>
                        </div>
                    </div> : <div className="h-[60vh] flex justify-center items-center"><h1 className="text-3xl font-bold text-red-500">No one applies for your job</h1></div>
                }

            </div>
        </>
    );
};

export default BidRequest;