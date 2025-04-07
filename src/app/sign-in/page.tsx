"use client";
import { useLogin } from "@/service/mutations/auth-mutations";
import { useAppSelector } from "@/store";
import { HeartPulseIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SignIn = () => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const { mutateAsync: login, isPending: logginIn } = useLogin();
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/dashboard");
    }
  }, [isLoggedIn, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = login(formData);
    console.log("Login response", response);
    console.log("Login form submitted:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4">
      <div className="max-w-md w-full bg-white rounded-lg p-8 shadow-lg">
        <div className="flex justify-center mb-6">
          <div className="w-10 h-10 flex items-center justify-center">
          <HeartPulseIcon size={40} color='#4f46e5' />
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-2 text-center text-neutral-800">Welcome back</h2>
        <p className="text-center text-gray-600 mb-6">
          Glad to see you again 👋
          <br />
          Login to your account below
        </p>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="login-email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="login-email"
                name="email"
                placeholder="enter email..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-neutral-600"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="login-password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="login-password"
                name="password"
                placeholder="enter password..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-neutral-600"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 mt-2"
            >
              {logginIn ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <button onClick={() => router.push("/sign-up")} className="text-indigo-600 hover:underline">
              Sign up for Free
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;