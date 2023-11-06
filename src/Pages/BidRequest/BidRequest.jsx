import { useEffect, useState } from "react";
import UseHooks from "../../Components/Hooks/UseHooks";
import BidRequestTable from "./BidRequestTable";

const BidRequest = () => {

    const { user } = UseHooks();
    const [myBidRequested, setMyBidRequested] = useState([]);

    const sellerEmail = user.email;

    useEffect(() => {
        fetch(`http://localhost:5000/mybid?sellerEmail=${sellerEmail}`)
            .then(res => res.json())
            .then(data => {
                setMyBidRequested(data);
            })
    }, [sellerEmail])
    
    return (
        <div>
            {
                myBidRequested.length > 0 ? <div className="min-h-[60vh] my-20">
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
                                    myBidRequested.map(item => <BidRequestTable key={item._id} item={item}></BidRequestTable>)
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
                </div> : <div className="h-[60vh] flex justify-center items-center"><h1 className="text-3xl font-bold text-red-500"> you do not bid job</h1></div>
            }

        </div>
    );
};

export default BidRequest;