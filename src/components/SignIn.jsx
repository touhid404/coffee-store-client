import React, { use } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import Alert from './Alert';

const SignIn = () => {

  const {signIn} = use(AuthContext);

  const handleSignIn= (e)=>{
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email,password).then(()=>{
      Alert('success','login success');
    }).catch(error=>{
      Alert('error',error.message);
    })


    



  }



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSignIn} className="space-y-4">
         
          
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
            Sign In
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Already have an account? <a href="/signin" className="text-blue-600">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
