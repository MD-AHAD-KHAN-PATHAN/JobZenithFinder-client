

const BidTable = ({item}) => {


    const {sellerEmail, ByerEmail, title, photo, jobCategory, price, SellerDeadline, ByerDeadline, status} = item;


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
                {ByerDeadline}
                <br />
                <span className="badge badge-ghost badge-sm">{ByerEmail}</span>
            </td>
            <td>{status}</td>
            <th>
                <button className="btn btn-ghost btn-xs">complete</button>
            </th>
        </tr>
    );
};


export default BidTable;
