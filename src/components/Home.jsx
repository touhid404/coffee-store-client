import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router'; // updated import
import CoffeeCard from './CoffeeCard';
import Banner from '../components/Banner';

const Home = () => {
  const initialCoffees = useLoaderData();
  const [coffees,setCoffees] = useState(initialCoffees);

  return (
   <div className="">
    <Banner></Banner>
     <div className="p-6 bg-[#fdfcf8] min-h-screen">
      
      <h2 className="text-center text-lg text-gray-500 italic">--- Sip & Savor ---</h2>
      <h1 className="text-4xl font-bold text-center text-[#331A15] mb-6">Our Popular Products</h1>
      <div className="flex justify-center mb-6">
        <Link to='/addcoffee' className="bg-[#D2B48C] text-black font-medium px-6 py-2 rounded hover:bg-[#c19a6b] transition">
          Add Coffee ☕
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>
        ))}
      </div>
    </div>
   </div>
  );
};

export default Home;
