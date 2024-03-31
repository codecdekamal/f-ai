import React, { useEffect, useState } from 'react';
import Img from '../assets/google_icon.svg';
import fbIcon from '../assets/fb_logo.webp';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const SignUp = ({ pathwise }) => {
  const [loggedUser, setLoggedUser] = useState(undefined);
  const { loginWithPopup, user, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();
  const pathHeader = pathwise === "signup" ? "Sign Up" : "Log In";
  const path = pathwise === "signup" ? "/signin" : "/signup";



  const handleNavigate = () => {
    navigate(path);
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithRedirect({ connection: 'google-oauth2' });
    } catch (error) {
      console.error('Error logging in with Google:', error);
    }
  };

  const handleEmailLogin = async () => {
    try {
      await loginWithRedirect({
        connection: "email",
      });
    } catch (error) {
      console.error("Error logging in with Email:", error);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      await loginWithRedirect({
        connection: "facebook",
      });
    } catch (error) {
      console.error("Error logging in with Facebook:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black/90">
      <div className="text-center mb-8">
        <h1 className="text-[3em] font-bold text-[#808080]">{pathHeader}</h1>
        <p className='text-[#808080]'>
          {pathwise === "signup" ? "Already a member?" : "Not a member?"}
          <span
            className="text-[rgb(253,98,98,1)] hover:underline cursor-pointer"
            onClick={handleNavigate}
          >
            {pathwise === "signup" ? " login" : " signup"}
          </span>
        </p>
      </div>
      <div className="w-full max-w-md">
        <button
          className="flex items-center justify-center w-full py-2 mb-4 bg-white text-gray-800 rounded-md shadow-md hover:bg-gray-100"
          onClick={handleGoogleLogin}
        >
          <img src={Img} alt="Google" className="h-6 mr-2" />
          <span>{pathwise === "signup" ? "Sign up with Google" : "Login with Google"}</span>
        </button>
        <button className="flex items-center justify-center w-full py-2 mb-4 bg-blue-600 text-gray-800 rounded-md shadow-md" onClick={handleFacebookLogin}>
          <img src={fbIcon} alt="Google" className="h-6 mr-2" />
          <span className='text-white'>
            {pathwise === "signup" ? "Sign up with facebook" : "Login with Facebook"}
          </span>
        </button>
        <div className="flex items-center justify-between w-full mb-4">
          <hr className="w-full border-gray-400" />
          <span className="mx-4 text-gray-400">or</span>
          <hr className="w-full border-gray-400" />
        </div>
        <div
          className="flex items-center justify-center w-full py-2 mb-4 bg-gray-700 text-white rounded-md shadow-md hover:bg-gray-600 cursor-pointer"
          onClick={handleEmailLogin}
        >
          <span>{pathwise === "signup" ? "Sign up with Email" : "Login with Email"}</span>
        </div>
      </div>
      {pathwise === "signup" ? (
        <div className="mt-8 flex items-center">
          <input
            type="checkbox"
            id="public-profile"
            className="mr-2 form-checkbox h-5 w-5 text-blue-600"
          />
          <label htmlFor="public-profile" className="text-gray-400">
            Sign up to this site with a public profile.{' '}
            <span className="text-blue-500 hover:underline cursor-pointer"> Read more </span>
          </label>
        </div>
      ) : null}
    </div>
  );
};

export default SignUp;