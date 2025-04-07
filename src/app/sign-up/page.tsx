"use client";
import { PhoneInput } from "@/components/phoneInput";
import { HeartPulseIcon } from "lucide-react";
import { useState } from "react";
import "react-phone-number-input/style.css";

const AccountType = [
  "patient",
  "doctor",
  "nurse",
  "social_worker",
  "lab_scientist",
];
export type rolesType =
  | "doctor"
  | "nurse"
  | "social_worker"
  | "lab_scientist"
  | "patient";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    dateOfBirth: "",
    phoneNumber: "", // Correctly initialized
    nationality: "",
    idType: "",
    password: "",
    confirmPassword: "",
    license: "",
  });

  const [selectedAccount, setSelectedAccount] = useState<rolesType>("patient");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhoneNumberChange = (value: string) => {
    setFormData({
      ...formData,
      phoneNumber: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign up form submitted:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl p-6 shadow-xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-center mb-4">
          <HeartPulseIcon size={40} color="#4f46e5" />
        </div>

        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-1">
          Sign up
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Enter your details below to create your account.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="fullName"
                className="text-sm font-medium text-gray-700 mb-1 block"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="John Doe"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-neutral-700 focus:outline-indigo-600"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700 mb-1 block"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                className="w-full px-3 py-2 border border-gray-300 text-neutral-700 rounded-md focus:outline-indigo-600"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="dateOfBirth"
                className="text-sm font-medium text-gray-700 mb-1 block"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                className="w-full px-3 py-2 border text-neutral-700 border-gray-300 rounded-md focus:outline-indigo-600"
                value={formData.dateOfBirth}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="phoneNumber"
                className="text-sm font-medium text-gray-700 mb-1 block"
              >
                Phone Number
              </label>
              <PhoneInput
                value={formData.phoneNumber}
                onChange={handlePhoneNumberChange}
                defaultCountry="NG" 
                className="my-custom-class"
              />
            </div>

            <div>
              <label
                htmlFor="nationality"
                className="text-sm font-medium text-gray-700 mb-1 block"
              >
                Nationality
              </label>
              <select
                id="nationality"
                name="nationality"
                className="w-full px-3 py-2 border text-neutral-700 border-gray-300 rounded-md"
                value={formData.nationality}
                onChange={handleChange}
              >
                <option value="">Select nationality</option>
                <option value="Brazil">Brazil</option>
                <option value="Ghana">Ghana</option>
                <option value="USA">USA</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="idType"
                className="text-sm font-medium text-gray-700 mb-1 block"
              >
                ID Type
              </label>
              <select
                id="idType"
                name="idType"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.idType}
                onChange={handleChange}
              >
                <option value="">Select ID type</option>
                <option value="passport">Passport</option>
                <option value="nationalID">National ID</option>
                <option value="driverLicense">Driver&apos;s License</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700 mb-1 block"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="text-sm font-medium text-gray-700 mb-1 block"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Re-enter password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="accountType"
                className="text-sm font-medium text-gray-700 mb-1 block"
              >
                Account Type
              </label>
              <select
                id="accountType"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                onChange={(e) =>
                  setSelectedAccount(e.target.value as rolesType)
                }
                value={selectedAccount}
              >
                {AccountType.map((account) => (
                  <option key={account} value={account}>
                    {account}
                  </option>
                ))}
              </select>
            </div>

            {(selectedAccount === "doctor" || selectedAccount === "nurse") && (
              <div className="md:col-span-2">
                <label
                  htmlFor="license"
                  className="text-sm font-medium text-gray-700 mb-1 block"
                >
                  License No.
                </label>
                <input
                  type="text"
                  id="license"
                  name="license"
                  placeholder="e.g. MD-123456"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-indigo-600"
                  value={formData.license}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>

          <div className="flex gap-4 mt-6">
            <button
              type="button"
              onClick={() => console.log("Cancelled")}
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
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
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <a href="#" className="text-indigo-600 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
