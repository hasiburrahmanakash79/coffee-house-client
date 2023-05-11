import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {

    const coffee = useLoaderData()
    const { coffeeName, photo, supplier, category, chef, _id, test, details } = coffee;

    const handleUpdateCoffee = event =>{
        event.preventDefault()
        const form = event.target 
        const coffeeName = form.coffeeName.value 
        const supplier = form.supplier.value
        const category = form.category.value
        const chef = form.chef.value 
        const test = form.test.value 
        const details = form.detail.value
        const photo = form.photoURL.value 
        const updateCoffee = {coffeeName, supplier, category, chef, test, details, photo}

        console.log(updateCoffee);

        fetch(`http://localhost:5000/coffee/${_id}`,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json',
            },
            body: JSON.stringify(updateCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Successful',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
            }
        })
    }

  return (
    <div className="container mx-auto mt-5 p-10 bg-slate-100">
      <h1 className="text-center text-5xl font-bold">Update coffee: {coffeeName}</h1>
      <p className="text-center mx-auto my-8 md:w-3/5">
        It is a long established fact that a reader will be distraceted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here.
      </p>
      <form onSubmit={handleUpdateCoffee}>
        <div className="md:flex gap-10 justify-center">
          <div className="md:w-1/2">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Coffee name</span>
              </label>
              <input
                type="text"
                name="coffeeName"
                defaultValue={coffeeName}
                placeholder="Enter coffee name"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Supplier</span>
              </label>
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                placeholder="Enter coffee supplier"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                name="category"
                defaultValue={category}
                placeholder="Enter coffee category"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Chef</span>
              </label>
              <input
                type="text"
                name="chef"
                defaultValue={chef}
                placeholder="Enter coffee chef"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <input
                type="text"
                name="test"
                defaultValue={test}
                placeholder="Enter coffee taste"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <input
                type="text"
                name="detail"
                defaultValue={details}
                placeholder="Enter coffee details"
                className="input input-bordered w-full"
              />
            </div>
          </div>
        </div>
        <div className="form-control mx-auto w-full">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="text"
            name="photoURL"
            defaultValue={photo}
            placeholder="Enter photo URL"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control mx-auto my-10 w-full">
          <button className="btn btn-outline">Update Coffee</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;