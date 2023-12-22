import { createContext, useState } from "react";

export const AuthContext = createContext({});

// eslint-disable-next-line react/prop-types
const AuthContextProvider = ({ children }) => {
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

  return (
    <AuthContext.Provider
      value={{
        checked,
        handleChange,
        showPassword,
        handleClickShowPassword,
        handleMouseDownPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
