import { useState } from 'react';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignInForm = () => setIsSignIn(!isSignIn);

  return (
    <div className="min-h-screen flex justify-center items-center relative">
      <div className="absolute bg-black">
        <img src="/images/Home_BG.jpg" alt="home_bg" className="w-screen h-screen object-cover opacity-50 -z-20" />
      </div>
      <div className="relative z-0 w-3/12 p-8 space-y-5 text-white ">
        <div className="absolute inset-0 bg-black opacity-80 -z-10"></div>
        <h2 className="text-3xl mb-5">{isSignIn ? 'Sign In' : 'Sign Up'}</h2>
        <form className="flex flex-col z-20 space-y-4">
          {!isSignIn && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-2 bg-transparent border-solid border-[1px] border-gray-500 outline-none"
            />
          )}
          <input
            type="text"
            placeholder="Email Address"
            className="p-2 bg-transparent border-solid border-[1px] border-gray-500 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 bg-transparent border-solid border-[1px] border-gray-500 outline-none"
          />
          {!isSignIn && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="p-2 bg-transparent border-solid border-[1px] border-gray-500 outline-none"
            />
          )}
          <button className="p-2 bg-red-600 text-white">{isSignIn ? 'Sign In' : ' Sign In'}</button>
        </form>
        <h3 className="text-white font-thin">
          {isSignIn ? 'New to Netflix-GPT?' : 'Already registered?'}
          <span className="font-medium cursor-pointer" onClick={toggleSignInForm}>
            {isSignIn ? ' Sign up' : ' Sign In'} now.
          </span>
        </h3>
      </div>
    </div>
  );
};

export default Login;
