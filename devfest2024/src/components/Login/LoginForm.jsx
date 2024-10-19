import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import logo from "../../assets/SmartBand.svg";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  async function handleLogin(event) {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/users/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      // Check if the response is okay before trying to parse JSON
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);

      if (response.status === 200) {
        localStorage.setItem("access token", data.token.access);
        localStorage.setItem("refresh token", data.token.refresh);
        alert("Login successful");
        navigate("/");
      } else if (response.status === 401) {
        alert("Invalid email or password");
        return 0;
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
      alert("An error occurred during login. Please try again later.");
    }
  }

  return (
    <div className="max-w-md mx-auto p-6 flex flex-col justify-center">
      <img src={logo} alt="SmartBand" className="h-12 mb-10 item-center" />
      <div className="h-[10px]" />
      <h1 className="text-2xl font-semibold mb-2 text-gray-900">
        Hello, Admin!
      </h1>
      <p className="text-lg font-light mb-4 text-gray-700">
        Great to have you back at SmartBand
      </p>
      <p className="text-sm font-medium mb-8 text-gray-500">
        Sign in to unlock your account and dive right in.
      </p>

      <form>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-[#026AA2] font-semibold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Type in your email..."
            className="w-full h-[60px] p-4 text-gray-500 text-[13px] bg-blue-50 rounded-2xl border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6 relative">
          <label className="block text-[#026AA2] text-sm font-bold mb-2">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            className="w-full h-[60px] p-4 text-gray-500 bg-blue-50 rounded-2xl text-[13px] border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Securely enter your password..."
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {showPassword ? (
            <EyeSlashIcon
              className="h-5 w-5 text-black"
              onClick={togglePasswordVisibility}
            />
          ) : (
            <EyeIcon className="h-5 w-5" onClick={togglePasswordVisibility} />
          )}
        </div>

        <div className="flex flex-row justify-between items-center mb-6">
          <div className="flex items-center">
            <input type="checkbox" className="mr-2 bg-[#026AA2]" />
            <label className="text-sm text-gray-600">Remember me</label>
          </div>
          <a
            href="#"
            className="text-[14px] text-[#026AA2] hover:underline poppins-semibold"
          >
            Forgot password?
          </a>
        </div>

        <button
          onClick={handleLogin}
          type="submit"
          className="w-full  bg-[#026AA2] text-white py-3 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Login
        </button>
      </form>
      <div className="flex flex-col justify-center items-center">
        <div className="h-[100px]"></div>
        <p className="font-regular text-[12px] text-[#bdbdbd]">
          © 2024 ALL RIGHTS RESERVED - SMARTBAND
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
