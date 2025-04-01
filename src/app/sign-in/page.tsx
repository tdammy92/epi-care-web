'use client'
import { useState } from "react";


const SignIn = () => {
    const [formData, setFormData] = useState({
      email: '',
      password: ''
    });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // Handle login form submission logic here
      console.log('Login form submitted:', formData);
    };
  
   
    return (
      <div className="max-w-md w-full bg-white justify-center items-center rounded-lg p-8 shadow-lg">
        <div className="flex justify-center mb-6">
          <div className="w-10 h-10 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-full h-full text-indigo-600" fill="currentColor">
              <rect x="2" y="2" width="9" height="9" rx="2" />
              <rect x="13" y="2" width="9" height="9" rx="2" />
              <rect x="2" y="13" width="9" height="9" rx="2" />
              <rect x="13" y="13" width="9" height="9" rx="2" />
            </svg>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold mb-2">Welcome back</h2>
        <p className="text-center text-gray-600 mb-6">
          Glad to see you again 👋<br />
          Login to your account below
        </p>
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="login-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="login-email"
                name="email"
                placeholder="enter email..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label htmlFor="login-password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                id="login-password"
                name="password"
                placeholder="enter password..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 mt-2"
            >
              Login
            </button>
          </div>
        </form>
        
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Don&apos;t have an account? <a href="#" className="text-indigo-600 hover:underline">Sign up for Free</a>
          </p>
        </div>
      </div>
    );
  };

  export default SignIn;