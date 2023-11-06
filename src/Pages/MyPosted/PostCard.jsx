import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const PostCard = ({ item, mypostedjobs, setMypostedJobs }) => {

    const { _id, email, title, deadline, description, maximum, minimum, photo, jobCategory } = item;

    const handleDelete = (_id) => {

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/job/${_id}`, {
                    method: 'DELETE',
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0) {
                        swalWithBootstrapButtons.fire(
                            'Deleted!',
                            'Your job post has been deleted.',
                            'success'
                        )
                        const remaining = mypostedjobs.filter( cart => cart._id !== _id);
                        setMypostedJobs(remaining);
                    }
                })
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })

    }


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
                    <button onClick={() => handleDelete(_id)} className="px-4 py-3 rounded-md font-bold bg-teal-600 text-white">Delete</button>
                    <Link to={`/update/${_id}`}><button className="px-4 py-3 rounded-md font-bold bg-teal-600 text-white">Update</button></Link>
                </div>
            </div>
        </div>
    );
};

export default PostCard;