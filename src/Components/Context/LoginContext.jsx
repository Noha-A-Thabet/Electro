import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const LoginContext = createContext({});

// eslint-disable-next-line react/prop-types
const LoginContextProvider = ({ children }) => {
  const initalState = {
    email: "",
    password: "",
  };
  const [userAuth, setUserAuth] = useState(initalState);
  const [errors, setErrors] = useState({});
  const [userLogin, setUserLogin] = useState(false);
  const [open, setOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [alert, setAlert] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  // useEffect fn For redirect User to Home Page
  useEffect(() => {
    if (userLogin) {
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
    return () => clearTimeout();
  }, [userLogin]);

  // formInputsHanlder
  const userInputHandler = (e) => {
    const { name, value } = e.target;
    setUserAuth((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // for modal style
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  // submit form Hanlder
  const submitFormHanlder = (e) => {
    e.preventDefault();
    let validationErrors = {};
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
      localStorage.setItem("userAuth", JSON.stringify(userAuth));
      setErrors({});

      setUserAuth(initalState);
      const loginEmail = userAuth.email;
      const loginPassword = userAuth.password;

      const data = JSON.parse(localStorage.getItem("users"));
      const user = data.find(
        (user) => user.email === loginEmail && user.password === loginPassword
      );
      if (user) {
        const { name } = user;
        console.log(name);
        setUserName(name);
        setUserLogin(true);
      } else {
        console.log("not");
        setUserLogin(false);
        setAlert(true);
      }
    }
  };

  return (
    <LoginContext.Provider
      value={{
        errors,
        open,
        userName,
        alert,
        handleClose,
        handleOpen,
        userInputHandler,
        style,
        submitFormHanlder,
        userAuth,
        userLogin,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
