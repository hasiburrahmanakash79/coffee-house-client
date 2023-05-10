const AddCoffee = () => {
  return (
    <div className="container mx-auto mt-5 p-10 bg-slate-100">
      <h1 className="text-center text-5xl font-bold">Add a coffee</h1>
      <p className="text-center mx-auto my-8 w-3/5">
        It is a long established fact that a reader will be distraceted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here.
      </p>
      <form>
      <div className="flex gap-10 justify-center">
        <div className="w-2/5">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Coffee name</span>
            </label>
            <input
              type="text"
              name="coffeeName"
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
              placeholder="Enter coffee category"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="w-2/5">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Chef</span>
            </label>
            <input
              type="text"
              name="chef"
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
              placeholder="Enter coffee details"
              className="input input-bordered w-full"
            />
          </div>
        </div>
      </div>
        <div className="form-control mx-auto px-1 md:w-5/6">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="text"
            name="photoURL"
            placeholder="Enter photo URL"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control mx-auto my-10 px-1 md:w-5/6">
        <button className="btn btn-outline">Add Coffee</button>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
