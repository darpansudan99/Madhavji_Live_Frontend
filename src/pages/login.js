// Login.js

import React, { useState, useEffect } from "react";
import signupImage from "../Assets/sigup.webp";
import { BiShow, BiHide } from "react-icons/bi";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginRedux, logoutRedux } from "../redux/userSlice";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  
  const userData = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    // Check for existing user information in localStorage during component mount
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      dispatch(loginRedux({ data: JSON.parse(storedUserData) }));
      navigate("/");
    }
  }, [dispatch, navigate]);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    if (email && password) {
      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMAIN}/login`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      try {
        if (!fetchData.ok) {
          throw new Error(`HTTP error! Status: ${fetchData.status}`);
        }
      
        const dataRes = await fetchData.json();
        console.log(dataRes);
      
        toast(dataRes.message);
      
        if (dataRes.alert) {
          dispatch(loginRedux(dataRes));
          localStorage.setItem("userData", JSON.stringify(dataRes.data));
          setTimeout(() => {
            navigate("/");
          }, 1000);
        }
      } catch (error) {
        console.error("Error handling login response:", error);
      }
    }
  };

  const handleLogout = () => {
    // Dispatch the logout action
    dispatch(logoutRedux());
    // Optionally, redirect to the login page or any other page
    navigate("/login");
  };

  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex flex-col p-4">
        <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto">
          <img src={signupImage} alt="signupImg" className="w-full" />
        </div>
        <form className="w-full py-3 flex flex-col" onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input
            type={"email"}
            id="email"
            name="email"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.email}
            onChange={handleOnChange}
          />

          <label htmlFor="password">Password</label>
          <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full bg-slate-200 border-none outline-none focus:outline-none"
              value={data.password}
              onChange={handleOnChange}
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowPassword}
            >
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <button className="w-full max-w-[150px] m-auto bg-blue-500 hover:bg-blue-600 cursor-pointer text-white text-xl font-medium py-1 rounded-full mt-4">
            Login
          </button>
        </form>
        <p className="text-left text-sm mt-2">
          Don't have an account?{" "}
          <Link to={"/signup"} className="text-blue-600 underline">
            Sign Up
          </Link>
        </p>

        {/* Example logout button/link */}
        {userData.email && (
          <button onClick={handleLogout} className="mt-4 bg-red-500 text-white px-4 py-2 rounded-full">
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Login;
