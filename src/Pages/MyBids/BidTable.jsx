import Swal from "sweetalert2";
import ProgressBarSection from "../BidRequest/ProgressBarSection";


const BidTable = ({item}) => {


    const {_id, sellerEmail, ByerEmail, title, photo, jobCategory, price, SellerDeadline, ByerDeadline, status} = item;

    const handleComplite = (id) => {

        const updatedata = {
            status: "complete"
        };

        fetch(`https://job-zenith-server.vercel.app/mybid/${_id}`, {
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
                        text: 'Your get this job successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                // const remaining = myBidRequested.filter(row => row._id !== id);
                // setMyBidRequested(remaining);
            })
    }

    let progressValue = 0;

    if(status === 'in progress'){
        progressValue = 50;
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
                        <div className="text-sm opacity-50">{ByerEmail}</div>
                    </div>
                </div>
            </td>
            <td>
                {ByerDeadline}
            </td>
            <td>{status}</td>
            <th>
                {status === 'in progress' && <ProgressBarSection>{progressValue}</ProgressBarSection>}
            </th>
            <th>
                {status === 'in progress' && <button onClick={() => handleComplite(_id)} className="py-2 px-4 bg-teal-500 text-white rounded-full">complete</button>}
            </th>
        </tr>
    );
};


export default BidTable;
