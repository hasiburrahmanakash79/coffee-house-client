import { FaEye, FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { coffeeName, photo, supplier, category, _id, test, details } = coffee;

    const handleDelete = (_id) =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirm'
          }).then((result) => {
            if (result.isConfirmed) {
              
            fetch(`http://localhost:5000/coffee/${_id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                   Swal.fire(
                    'Deleted!',
                    'Your Coffee has been deleted.',
                    'success'
                  ) 
                }
            })
            }
          })
    }


  return (
    <div className="">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="coffee" className="w-36" />
        </figure>
        <div className="card-body flex">
          <div>
            <h2 className="card-title">{coffeeName}</h2>
            <p>Details: {details}</p>
            <p>Supplier: {supplier}</p>
            <p>Category: {category}</p>
            <p>Test: {test}</p>
          </div>
          <div className="flex gap-4">
            <button><FaEye></FaEye></button>
            <Link to={`/updateCoffee/${_id}`}><button><FaEdit></FaEdit></button></Link>
            <button onClick={() => handleDelete(_id)}><FaTrashAlt></FaTrashAlt></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
