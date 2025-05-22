import { DeleteIcon } from 'lucide-react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import Alert from './Alert';

import { useState } from 'react';

const Users = () => {

    const initialUsersData = useLoaderData();

    const [usersData,setUsersData] = useState(initialUsersData);



     const handleDelete = (_id) => {
  Swal.fire({
    title: "Are you sure to delete?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      // Delete user from database first
      fetch(`https://coffee-store-server-cyan-eta.vercel.app/users/${_id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount) {
            Swal.fire({
                  title: "Deleted!",
                  text: "Your account has been deleted.",
                  icon: "success"
                });

                // Update local state
                const remainingUsers = usersData.filter(u => u._id !== _id);
                setUsersData(remainingUsers);
          }
        })
        .catch((error) => {
          Alert('error', error.message);
        });
    }
  });
};

    return (
        <div>

            <h1>Total users : {usersData.length}</h1>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         Serial
        </th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Last Active</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
       {
        usersData.map ((user,index)=>
              <tr key={user._id}>
        <th>
         {

            index+1
         }
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              {
                user.name
              }
            </div>
          </div>
        </td>
        <td>
         {
            user.email
         }
        </td>
        <td>{user.phone}</td>
        <th>
          {
            user.lastSignInTime
          }
        </th>
        <th>
            <button onClick={()=>handleDelete(user._id)}>
                <DeleteIcon size={16}></DeleteIcon>
            </button>
        </th>
      </tr>
        )
       }
 
    
   
    </tbody>
   
  </table>
</div>
            
        </div>
    );
};

export default Users;