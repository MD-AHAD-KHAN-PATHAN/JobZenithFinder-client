import { Link } from "react-router-dom";


const Card = ({ item }) => {

    const { _id, email, title, deadline, description, maximum, minimum, photo, jobCategory } = item;

    const shortDescription = description.slice(0, 60) + '...';

    return (

        <div className="card-compact bg-base-100 shadow-md rounded-md">
            <figure><img src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p><span className="font-bold">Deadline :</span> {deadline}</p>
                <p><span className="font-bold">Price Range : </span> $ {maximum} - $ {minimum} </p>
                <p>{shortDescription}</p>
                <div className="card-actions justify-end">
                    <Link to={`/details/${_id}`}><button className="px-4 py-3 rounded-md font-bold bg-teal-600 text-white">Bid Now</button></Link>
                </div>
            </div>
        </div>

    );
};

export default Card;