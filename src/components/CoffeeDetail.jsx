import React from 'react';
import { useLoaderData } from 'react-router'; // Updated: react-router-dom

const CoffeeDetail = () => {
  const coffeeData = useLoaderData();
  const { photoUrl, name, taste, price, details } = coffeeData;

  return (
    <div className="flex items-center justify-center min-h-screen  px-4">
      <div className="bg-gradient-to-br from-yellow-100 via-orange-100 to-yellow-50 rounded-2xl shadow-xl overflow-hidden max-w-3xl w-full md:flex">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src={photoUrl}
            alt={name}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Info Section */}
        <div className="md:w-1/2 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-brown-800">{name}</h2>
          <p className="text-gray-700">
            <span className="font-semibold">Taste:</span> {taste}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Price:</span> {price} Taka
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Details:</span> {details}
          </p>
          <button className="mt-4 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-md transition duration-200">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetail;
