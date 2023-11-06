import { Link } from "react-router-dom";

const PostCard = ({ item }) => {

    const { _id, email, title, deadline, description, maximum, minimum, photo, jobCategory } = item;

    return (
        <div className="card card-compact bg-base-100 shadow-md">
            <figure><img src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h1 className="text-3xl font-bold">{jobCategory}</h1>
                <h2 className="card-title">{title}</h2>
                <p><span className="font-bold">Deadline :</span> {deadline}</p>
                <p><span className="font-bold">Price Range : </span> $ {maximum} - $ {minimum} </p>
                <p>{description}</p>
                <div className="card-actions justify-between">
                    <button className="px-4 py-3 rounded-md font-bold bg-teal-600 text-white">Delete</button>
                    <Link to={`/update/${_id}`}><button className="px-4 py-3 rounded-md font-bold bg-teal-600 text-white">Update</button></Link>
                </div>
            </div>
        </div>
    );
};

export default PostCard;