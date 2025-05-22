import { BadgeInfo, Pencil, Trash2 } from 'lucide-react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee,coffees,setCoffees }) => {




    const handleDelete = (_id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                // start deleting the coffee
                fetch(`https://coffee-store-server-cyan-eta.vercel.app/coffees/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });

                            // remove the coffee from the state
                            const remainingCoffees = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remainingCoffees);
                        }
                    })


            }
        });

    }


  const { _id, name, taste, price, photoUrl } = coffee;

  return (
    <div className="flex items-center justify-between bg-[#F5F4F1] rounded-xl shadow-lg p-5 max-w-2xl">
      {/* Coffee Image */}
      <img
        src={photoUrl}
        alt={name}
        className="w-[130px] h-[180px] object-cover rounded-md"
      />

      {/* Coffee Info */}
      <div className="flex-1 ml-6 space-y-2">
        <p className="text-lg"><span className="font-semibold">Name:</span> {name}</p>
        <p className="text-lg"><span className="font-semibold">Taste:</span> {taste}</p>
        <p className="text-lg"><span className="font-semibold">Price:</span> {price} Taka</p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3 ml-4">
        
       <Link to={`/coffeeDetail/${_id}`}>
        <button className="bg-[#D2B48C] hover:bg-[#c1a475] text-white p-2 rounded">
          <BadgeInfo size={18} />
        </button>
       
       </Link >


        <Link to={`updateCoffee/${_id}`}>

        <button className="bg-[#3C3C3C] hover:bg-[#2e2e2e] text-white p-2 rounded">
          <Pencil size={18} />
        </button>
        </Link>


        <button
          onClick={() => handleDelete(_id)}
          className="bg-red-500 hover:bg-red-600 text-white p-2 rounded"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
