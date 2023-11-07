import Swal from "sweetalert2";
import ProgressBarSection from "./ProgressBarSection";


const BidRequestTable = ({ item, myBidRequested, setMyBidRequested }) => {

    const { _id, sellerEmail, ByerEmail, title, photo, jobCategory, price, SellerDeadline, ByerDeadline, status } = item;

    let Status = status;

    const handleReject = (id) => {

        const updatedata = {
            status: "rejected"
        };

        fetch(`http://localhost:5000/mybid/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedata)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Your reject this job',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                // const remaining = myBidRequested.filter(row => row._id !== id);
                // setMyBidRequested(remaining);
            })
    }

    const handleAccept = (id) => {

        const updatedata = {
            status: "in progress"
        };

        fetch(`http://localhost:5000/mybid/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedata)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'You accept this bid',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                // const remaining = myBidRequested.filter(row => row._id !== id);
                // setMyBidRequested(remaining);
            })
    }

    let rejectedValue = 0;
    let progressValue = 0;
    
    if(Status === 'rejected'){
        rejectedValue = 0;
    }
    if(Status === 'in progress'){
        progressValue = 50;
    }
    if(Status === 'complete'){
        progressValue = 100;
    }
    
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{title}</div>
                        <div className="text-sm opacity-50">{sellerEmail}</div>
                    </div>
                </div>
            </td>
            <td>
                {SellerDeadline}
                <br />
                {/* <span className="badge badge-ghost badge-sm">{ByerEmail}</span> */}
            </td>
            <td>{Status}</td>
            {/* {Status === 'rejected' ? <th><ProgressBarSection>{value}</ProgressBarSection></th> : <> <th>
                <button onClick={() => handleReject(_id)} className="btn btn-ghost btn-xs">Reject</button>
            </th>
                <th>
                    <button onClick={() => handleAccept(_id)} className="btn btn-ghost btn-xs">Accept</button>
                </th> </>} */}
            {
                Status === 'rejected' ? <th><ProgressBarSection>{rejectedValue}</ProgressBarSection></th> : <>
                    {
                        Status === 'in progress' || Status === 'complete' ? <th><ProgressBarSection>{progressValue}</ProgressBarSection></th> : <>
                            <th>
                                <button onClick={() => handleReject(_id)} className="py-2 px-4 bg-red-500 text-white rounded-full">Reject</button>
                            </th>
                            <th>
                                <button onClick={() => handleAccept(_id)} className="py-2 px-4 bg-green-500 text-white rounded-full">Accept</button>
                            </th>
                        </>
                    }
                </>
            }

        </tr>
    );
};

export default BidRequestTable;