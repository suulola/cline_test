import React from "react";
import "./Login.css";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <div className="bg-gray-50 h-screen w-100">
      <nav className="md:flex justify-between pt-5 h-auto mb-5">
        <div className="w-100 md:w-1/2  flex justify-center md:justify-end divide-x-2 divide-rose-400 divide-double">
          <a
            href=""
            className="text-gray-500 cursor transition ease-in duration-200 delay-75 transform hover:-translate-y-1 hover:scale-110 px-3"
          >
            Home
          </a>
          <a
            href=""
            className="text-gray-500 cursor transition ease-in duration-200 delay-75 transform hover:-translate-y-1 hover:scale-110 px-3"
          >
            About
          </a>
          <a
            href=""
            className="text-gray-500 cursor transition ease-in duration-200 delay-75 transform hover:-translate-y-1 hover:scale-110 px-3"
          >
            Contact Us
          </a>
          <a
            href=""
            className="text-gray-500 cursor transition ease-in duration-200 delay-75 transform hover:-translate-y-1 hover:scale-110 px-3"
          >
            Help
          </a>
        </div>
        <div className="pt-3 md:pt-0 w-100 md:w-1/2  flex justify-center">
          <a
            href=""
            className="px-3 py-1 bg-gray-50 text-gray-500 mx-2 rounded-2xl"
          >
            Register
          </a>
          <a
            href=""
            className="px-3 py-1 bg-gray-50 text-gray-500 mx-2 rounded-2xl"
          >
            Sign In
          </a>
        </div>
      </nav>
      <div className="md:flex from-blue-300 bg-gradient-to-t w-full flex-1 h-5/6 mt-12 pb-5">
        <div className="w-100 md:w-1/2  flex justify-center px-3 md:justify-center">
          <motion.div
            initial={{ scale: 0.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.7 }}
            className="my-auto"
          >
            <p className="text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-400 font-black text-2xl font-bold antialiased md:text-left">
              Experience Life.
            </p>
            <p className="text-center text-md font-bold subpixel-antialiased mb-5 md:text-left">
              Join the Train
            </p>
            <small className="text-center md:text-left">
              If you don't have an account, you can register{" "}
              <span className="text-blue-600">here</span>
            </small>
          </motion.div>
        </div>
        <div className="pt-3 md:pt-0 w-full md:w-1/2 px-3 flex justify-center">
          <motion.div
            initial={{ scale: 0.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.7 }}
            className="pb-12 px-5 pt-10 bg-white min-h-32 rounded max-h-96"
          >
            <input
              type="text"
              className="bg-gray-100 border-0 placeholder-gray-500 w-full rounded h-14 p-3 focus:border:0"
              placeholder="Enter email or phone number"
            />
            <input
              type="text"
              className="bg-gray-100 mt-3 border-0 placeholder-gray-500 w-full rounded h-14 p-3 focus:border:0"
              placeholder="Password"
            />
            <div className="flex justify-end mt-1 mb-12">
              <p className="text-sm text-gray-300">Forgot Password?</p>
            </div>

            <button className="bg-blue-400 w-full rounded-lg text-gray-50 font-light py-2">
              Sign In
            </button>

            <div className="flex flex-grow mx-2 mt-3">
                <div className="flex-1 mt-3 border-t-2 border-solid border-gray-200"></div>
                <p className="mx-2 text-xs mt-1 text-gray-400">Or Continue with</p>
                <div className="flex-1 mt-3 border-t-2 border-solid border-gray-200"></div>
            </div>

            <div className="flex mx-12 mt-3 justify-around">
                <img src="/assets/images/google.svg" alt="google" className="border px-4 py-3 w-14"/>
                <img src="/assets/images/apple.svg" alt="apple" className="border px-4 py-3 w-14"/>
                <img src="/assets/images/facebook.svg" alt="facebook" className="border px-4 py-3 w-14"/>
              
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Login;
