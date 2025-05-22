import React from 'react';
import Alert from './Alert';
import { Link } from 'react-router';


const AddCoffee = () => {




    const handleAddCoffe=(e)=>{
        e.preventDefault();
        const form = e.target;

        const formData = new FormData(form);

        const coffeeData = Object.fromEntries(formData.entries());
         

        // Send data to db
        fetch('https://coffee-store-server-cyan-eta.vercel.app/coffees',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(coffeeData)
        })
        .then(res => res.json())
        .then(data => {
          if(data.insertedId){
            Alert('success','Coffee addedd successfully');
          }
        });



    }




  return (
    <div className="min-h-screen bg-[#f3f3f3] flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white p-10 rounded shadow-md">
     <Link to='/'>
      <button  className='btn btn-primary'>
        Back
      </button>
     </Link>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Add New Coffee</h2>
        <p className="text-center text-gray-500 mb-8 max-w-2xl mx-auto">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
        </p>
        <form onSubmit={handleAddCoffe} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 text-gray-700">Name</label>
            <input name='name' type="text" placeholder="Enter coffee name" className="w-full px-4 py-2 border rounded-md" />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Quantity</label>
            <input name='quantity' type="text" placeholder="Enter coffee quantity" className="w-full px-4 py-2 border rounded-md" />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Supplier</label>
            <input name='supplier' type="text" placeholder="Enter coffee supplier" className="w-full px-4 py-2 border rounded-md" />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Taste</label>
            <input name='taste' type="text" placeholder="Enter coffee taste" className="w-full px-4 py-2 border rounded-md" />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Price</label>
            <input name='price' type="text" placeholder="Enter coffee price" className="w-full px-4 py-2 border rounded-md" />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Details</label>
            <input name='details' type="text" placeholder="Enter coffee details" className="w-full px-4 py-2 border rounded-md" />
          </div>
          <div className="md:col-span-2">
            <label className="block mb-1 text-gray-700">Photo</label>
            <input name='photoUrl' type="text" placeholder="Enter photo URL" className="w-full px-4 py-2 border rounded-md" />
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-[#D2B48C] text-black font-semibold py-2 px-4 rounded hover:bg-[#c19a6b] transition duration-300"
            >
              Add Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
