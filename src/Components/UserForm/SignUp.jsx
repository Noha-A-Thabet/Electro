import TextField from "@mui/material/TextField";
import { useContext, useState } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";
import { AuthContext } from "../Context/AuthContext";
import "./form.css";

const SignUp = () => {
  const { showPassword, handleClickShowPassword, handleMouseDownPassword } =
    useContext(AuthContext);

  const [userAuth, setUserAuth] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const userInputHandler = (e) => {
    const { name, value } = e.target;
    setUserAuth((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitFormHanlder = (e) => {
    e.preventDefault();
    let validationErrors = {};
    // name validation
    if (!userAuth.name.trim()) {
      validationErrors.name = "Username is required";
    } else if (userAuth.name.length < 6) {
      validationErrors.name = "Username should be 6 characters at least";
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
      setErrors({});
    }
  };
  return (
    <form onSubmit={submitFormHanlder}>
      {/* Name */}
      <p>
        <TextField
          id="standard-basic"
          label="Username"
          variant="standard"
          fullWidth
          size="small"
          name="name"
          value={userAuth.name}
          onChange={userInputHandler}
        />
      </p>
      {errors.name && <span className="errorMsg">{errors.name}</span>}
      {/* Email */}
      <p>
        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          fullWidth
          size="small"
          name="email"
          value={userAuth.email}
          onChange={userInputHandler}
        />
        {errors.email && <span className="errorMsg">{errors.email}</span>}
      </p>
      {/* Password */}
      <FormControl sx={{ m: 1, width: "100%" }} variant="standard">
        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
        <Input
          id="standard-adornment-password"
          type={showPassword ? "text" : "password"}
          name="password"
          value={userAuth.password}
          onChange={userInputHandler}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      {/* Submit */}
      {errors.password && <span className="errorMsg">{errors.password}</span>}
      <p>
        <Button
          fullWidth
          type="submit"
          variant="contained"
          startIcon={<LoginIcon />}
          sx={{ marginTop: "20px" }}
        >
          sign up
        </Button>
      </p>
    </form>
  );
};

export default SignUp;
