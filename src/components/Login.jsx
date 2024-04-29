import { useRef, useState } from 'react';
import { validateSignUpForm, validateSigninForm } from '../utils/validate';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [error, setError] = useState();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const toggleSignInForm = () => setIsSignIn(!isSignIn);

  const handleAuthentication = () => {
    setError(undefined);
    if (isSignIn) {
      const signInFormError = validateSigninForm(emailRef.current.value, passwordRef.current.value);
      signInFormError ? setError(signInFormError) : console.log('valid form');
      return;
    }
    const signUpFormError = validateSignUpForm(
      nameRef.current.value,
      emailRef.current.value,
      passwordRef.current.value,
      confirmPasswordRef.current.value
    );
    signUpFormError ? setError(signUpFormError) : console.log("valid sign up form");
  };

  return (
    <div className="min-h-screen flex justify-center items-center relative">
      <div className="absolute bg-black">
        <img src="/images/Home_BG.jpg" alt="home_bg" className="w-screen h-screen object-cover opacity-50 -z-20" />
      </div>
      <div className="relative z-0 w-3/12 p-8 space-y-5 text-white ">
        <div className="absolute inset-0 bg-black opacity-80 -z-10"></div>
        <h2 className="text-3xl mb-5">{isSignIn ? 'Sign In' : 'Sign Up'}</h2>
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col z-20 space-y-4">
          {!isSignIn && (
            <input
              ref={nameRef}
              type="text"
              placeholder="Full Name"
              className="p-2 bg-transparent border-solid border-[1px] border-gray-500 outline-none"
            />
          )}
          <input
            ref={emailRef}
            type="text"
            placeholder="Email Address"
            className="p-2 bg-transparent border-solid border-[1px] border-gray-500 outline-none"
          />
          <input
            ref={passwordRef}
            type="password"
            placeholder="Password"
            className="p-2 bg-transparent border-solid border-[1px] border-gray-500 outline-none"
          />
          {!isSignIn && (
            <input
              ref={confirmPasswordRef}
              type="password"
              placeholder="Confirm Password"
              className="p-2 bg-transparent border-solid border-[1px] border-gray-500 outline-none"
            />
          )}
          {error && <span className="text-sm text-red-600">{error}</span>}

          <button className="p-2 bg-red-600 text-white" onClick={handleAuthentication}>
            {isSignIn ? 'Sign In' : ' Sign In'}
          </button>
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
