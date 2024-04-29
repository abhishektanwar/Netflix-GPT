export const validateSigninForm = (email, password) => {
  const isValidEmail = validateEmail(email);
  if(!isValidEmail) return "Invalid Email Address";
  const isValidPassword = validatePassword(password);
  if(!isValidPassword) return "Invalid Password";
  return null;
}

export const validateSignUpForm = (name, email, password, confirmPassword) => {
  const isValidName = name.length > 0;
  if(!isValidName) return "Invalid Name";
  const isValidEmail = validateEmail(email);
  if(!isValidEmail) return "Invalid Email Address";
  const isValidPassword = validatePassword(password);
  if(!isValidPassword) return "Invalid Password";
  if(password !== confirmPassword) return "Password and Confirm Password do not match"
  return null
}


const validateEmail = (email) => /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

const validatePassword = (password) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);