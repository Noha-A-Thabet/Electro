import { createContext, useState } from "react";

export const SignUpContext = createContext({});

// eslint-disable-next-line react/prop-types
const SignUpContextProvider = ({ children }) => {
  // state for display signUp/Login
  const [checked, setChecked] = useState(true);

  // state for show/hide password
  const [showPassword, setShowPassword] = useState(false);

  // change checkState onChnage
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  // function display/hide password
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // SignUp Functions
  const initalState = {
    name: "",
    email: "",
    password: "",
  };

  // state for userAuth
  const [userAuth, setUserAuth] = useState(initalState);

  // state for Errors
  const [errors, setErrors] = useState({});
  // state for Success
  const [success, setSuccess] = useState(false);

  // handleUserInput
  const userInputHandler = (e) => {
    const { name, value } = e.target;
    setUserAuth((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // SubmitFormHanlder
  const submitFormHanlder = (e) => {
    e.preventDefault();
    let validationErrors = [];
    // name validation
    if (!userAuth.name.trim()) {
      validationErrors.name = "Username is required";
    } else if (userAuth.name.length < 4) {
      validationErrors.name = "Username should be 4 characters at least";
    }

    // email validation
    if (!userAuth.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userAuth.email)
    ) {
      validationErrors.email = "Email is Not Valid";
    }

    // password validation
    if (!userAuth.password.trim()) {
      validationErrors.password = "Password is required";
    } else if (userAuth.password.length < 4) {
      validationErrors.password = "Password should be at leatest 6 character";
    }

    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSuccess(true);

      setErrors({});
      //localStorage
      const existingUsersJSON = localStorage.getItem("users");
      const existingUsers = existingUsersJSON
        ? JSON.parse(existingUsersJSON)
        : [];

      // Add a new user to the existing users array
      existingUsers.push({
        name: userAuth.name,
        email: userAuth.email,
        password: userAuth.password,
      });

      // Store the updated users array back in local storage
      localStorage.setItem("users", JSON.stringify(existingUsers));
    }
    setUserAuth(initalState);
  };

  return (
    <SignUpContext.Provider
      value={{
        checked,
        handleChange,
        showPassword,
        handleClickShowPassword,
        handleMouseDownPassword,
        userAuth,
        setUserAuth,
        errors,
        setErrors,
        success,
        setSuccess,
        userInputHandler,
        submitFormHanlder,
      }}
    >
      {children}
    </SignUpContext.Provider>
  );
};

export default SignUpContextProvider;
