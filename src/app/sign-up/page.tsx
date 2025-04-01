'use client'
import { HeartPulseIcon } from 'lucide-react';
import { useState } from 'react';

const AccountType = [ 'patient','doctor' , 'nurse' , 'social_worker' , 'lab_scientist' ];
export type  rolesType = 'doctor' | 'nurse' | 'social_worker' | 'lab_scientist' | 'patient';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    dateOfBirth: '',
    phoneNumber: '',
    nationality: '',
    idType: '',
    password: '',
    confirmPassword: '',
    license: ''
  });

  const [selectedAccount, setSelectedAccount] = useState<rolesType | null>("patient");

  console.log("SELECTED ACCOUNT", selectedAccount)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log('Sign up form submitted:', formData);
  };


  return (
    <div className="max-w-md w-full bg-white rounded-lg p-8 shadow-lg">
      <div className="flex justify-center mb-6">
      <HeartPulseIcon size={40} color='#4f46e5' />
      </div>
      
      <h2 className="text-2xl font-bold mb-2 text-indigo-600">Sign up</h2>
      <p className="text-gray-600 mb-6">Enter your details below to create your account and get started.</p>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="enter..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-indigo-600"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@gmail.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-indigo-600"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
              <div className="relative">
                <select
                  id="dateOfBirth"
                  name="dateOfBirth"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md appearance-none pr-10 focus:outline-indigo-600"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                >
                  <option value="">MM / DD / YY</option>
                  {/* Date options would go here */}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <div className="flex">
                <div className="inline-flex items-center px-3 py-2 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md">
                  <span className="flex-shrink-0 mr-1">
                    <span className="flag-icon">🇧🇷</span>
                  </span>
                  +55
                </div>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="1344-343"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="nationality" className="block text-sm font-medium text-gray-700 mb-1">Nationality</label>
              <div className="relative">
                <select
                  id="nationality"
                  name="nationality"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md appearance-none pr-10"
                  value={formData.nationality}
                  onChange={handleChange}
                >
                  {/* <option value="Brazil">
                    <p className="flag-icon">🇧🇷</p> Brazil
                  </option> */}
                  {/* Other nationality options */}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div>
              <label htmlFor="idType" className="block text-sm font-medium text-gray-700 mb-1">ID Type</label>
              <div className="relative">
                <select
                  id="idType"
                  name="idType"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md appearance-none pr-10"
                  value={formData.idType}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="passport">Passport</option>
                  <option value="nationalID">National ID</option>
                  <option value="driverLicense">Driver's License</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="enter..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="enter..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>

        <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Account type</label>
            <select onChange={(e) => setSelectedAccount(e.target.value as rolesType)}  className="w-full px-3 py-2 border border-gray-300 rounded-md appearance-none text-neutral-800 pr-10">
                {AccountType.map((account) => <option  className='text-neutral-700' key={account} value={account}>
                    {account}
                </option>)}
            </select>
        </div>

        {(selectedAccount === 'doctor' || selectedAccount === 'nurse' ) ? (
            <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">License No.</label>
            <input
              type="text"
              id="license"
              name="license"
              placeholder="MD-12445758758585"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-indigo-600"
              value={formData.license}
              onChange={handleChange}
            />
          </div>
        ): null}

          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-4">
            <button 
              type="button" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700"
              onClick={() => console.log('Cancelled')}
            >
              Cancel
            </button>
            
            <button 
              type="submit" 
              className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Confirm
            </button>
          </div>
        </div>
      </form>
      
      <div className="text-center mt-6">
        <p className="text-sm text-gray-600">
          Already have an account? <a href="#" className="text-indigo-600 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
};


export default SignUp;

