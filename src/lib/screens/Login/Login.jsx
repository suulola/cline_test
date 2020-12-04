import React, { useState } from "react";
import { motion } from "framer-motion";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  googleLogin,
  emailPasswordLogin,
} from "../../redux/actions/userActions";

const Login = ({ googleLogin, emailPasswordLogin }) => {
  console.log(process.env.REACT_APP_CLIENT_ID);
  const history = useHistory();
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const processGoogleOauth = async (response) => {
    const processUser = await googleLogin(response);
    const { error } = processUser.payload;
    setShowError(true);
    setTimeout(() => setShowError(false), 5000);
    if (error) {
      console.log(error);
      setError(error);
      return;
    }
    history.push("/dashboard");
  };

  const processFailedGoogleOauth = async (response) => {
    console.log(response);
    const { error } = response;
    setError(error);
    setShowError(true);
    setTimeout(() => setShowError(false), 5000);
    return;
  };

  const processEmailPasswordLogin = async () => {
    if (!email || !password) {
      setError("Required fields missing");
      setShowError(true);
      setTimeout(() => setShowError(false), 5000);
      return;
    }
    const userLogin = await emailPasswordLogin({ email, password });
    console.log(userLogin, "********");
    history.push("/dashboard");
  };

  return (
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
            If you don't have an account, you can{" "}
            <span className="text-blue-600 font-semibold">Register here</span>
          </small>
          {showError && (
            <div className="text-center text-xs text-red-500">{error}</div>
          )}{" "}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="bg-gray-100 border-0 placeholder-gray-500 w-full rounded h-14 p-3 focus:border:0"
            placeholder="Enter email or phone number"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="bg-gray-100 mt-3 border-0 placeholder-gray-500 w-full rounded h-14 p-3 focus:border:0"
            placeholder="Password"
          />
          <div className="flex justify-end mt-1 mb-12">
            <p className="text-sm text-gray-300">Forgot Password?</p>
          </div>

          <button
            onClick={processEmailPasswordLogin}
            className="bg-blue-400 w-full rounded-lg text-gray-50 font-light py-2"
          >
            {/* <Link to="/dashboard">Sign In</Link> */}
            Sign In
          </button>

          <div className="flex flex-grow mx-2 mt-3">
            <div className="flex-1 mt-3 border-t-2 border-solid border-gray-200"></div>
            <p className="mx-2 text-xs mt-1 text-gray-400">Or Continue with</p>
            <div className="flex-1 mt-3 border-t-2 border-solid border-gray-200"></div>
          </div>

          <div
            id="socialMediaLoginAuth"
            className="flex mx-12 mt-3 justify-around"
          >
            <img
              src="/assets/images/apple.svg"
              alt="apple"
              className="border px-4 py-3 w-14 rounded"
            />

            <GoogleLogin
              autoLoad={false}
              clientId={process.env.REACT_APP_CLIENT_ID}
              onSuccess={processGoogleOauth}
              onFailure={processFailedGoogleOauth}
              className="border px-4 py-3 w-14 rounded"
              buttonText={null}
              style={{ paddingLeft: 8 }}
              cookiePolicy={"single_host_origin"}
            />

            <img
              src="/assets/images/facebook.svg"
              alt="facebook"
              className="border px-4 py-3 w-14 rounded"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};


export default connect(null, { googleLogin, emailPasswordLogin })(
  Login
);
