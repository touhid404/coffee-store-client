import React, { use } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import Alert from './Alert';

const SignUp = () => {

  const {createUser} = use(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const fromData = new FormData(form);
    const {email, password ,...restForm} = Object.fromEntries(fromData.entries());

    

    createUser(email, password)
      .then((result) => {


        const userProfile = {
          email,
          ...restForm,
          creationTime : result.user?.metadata?.creationTime,
          lastSignInTime : result.user?.metadata?.lastSignInTime,


        }






        // Save user other info in db
        fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(userProfile)
        })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            Alert('success', 'Account created successfully');
          }
        })
      })
      .catch((error) => {
        Alert('error', error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSignUp} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-1 font-medium">Phone</label>
            <input
              id="phone"
              type="text"
              name="phone"
              placeholder="Your Phone Number"
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1 font-medium">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Your Password"
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Already have an account? <a href="/signin" className="text-blue-600">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
