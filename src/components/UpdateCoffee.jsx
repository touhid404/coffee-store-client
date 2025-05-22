import React from 'react';
import { useLoaderData } from 'react-router';
import Alert from './Alert';

const UpdateCoffee = () => {

    const initialCoffeeData = useLoaderData();
    const { _id,photoUrl, name, taste, price, details,quantity,supplier } = initialCoffeeData;




    const handleUpdateCoffee=(e)=>{

        e.preventDefault();
        const form = e.target;

        const formData = new FormData(form);
        const coffeeData = Object.fromEntries(formData.entries());

        fetch(`https://coffee-store-server-cyan-eta.vercel.app/coffees/${_id}`,{

            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(coffeeData)

        })
        .then(res => res.json())
        .then(data=>{
            if(data.modifiedCount){
                Alert('success','data updated successfully');
            }

        })

    }
    return (
         <div className="min-h-screen bg-[#f3f3f3] flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white p-10 rounded shadow-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Update Coffee Coffee</h2>
       
        <form onSubmit={handleUpdateCoffee} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 text-gray-700">Name</label>
            <input name='name' type="text" placeholder="Enter coffee name" defaultValue={name} className="w-full px-4 py-2 border rounded-md" />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Quantity</label>
            <input name='quantity' type="text" placeholder="Enter coffee quantity" defaultValue={quantity} className="w-full px-4 py-2 border rounded-md" />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Supplier</label>
            <input name='supplier' type="text" placeholder="Enter coffee supplier" defaultValue={supplier} className="w-full px-4 py-2 border rounded-md" />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Taste</label>
            <input name='taste' type="text" placeholder="Enter coffee taste" defaultValue={taste} className="w-full px-4 py-2 border rounded-md" />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Price</label>
            <input name='price' type="text" placeholder="Enter coffee price" defaultValue={price} className="w-full px-4 py-2 border rounded-md" />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Details</label>
            <input name='details' type="text" placeholder="Enter coffee details" defaultValue={details} className="w-full px-4 py-2 border rounded-md" />
          </div>
          <div className="md:col-span-2">
            <label className="block mb-1 text-gray-700">Photo</label>
            <input name='photoUrl' type="text" placeholder="Enter photo URL" defaultValue={photoUrl} className="w-full px-4 py-2 border rounded-md" />
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-[#D2B48C] text-black font-semibold py-2 px-4 rounded hover:bg-[#c19a6b] transition duration-300"
            >
              Update  Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
    );
};

export default UpdateCoffee;