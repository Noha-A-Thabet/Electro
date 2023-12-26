import TextField from "@mui/material/TextField";
import { useContext } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  Button,
  Alert,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";
import { SignUpContext } from "../Context/SignUpContext";
import "./form.css";

const SignUp = () => {
  const {
    showPassword,
    handleClickShowPassword,
    handleMouseDownPassword,
    userAuth,
    errors,
    success,
    userInputHandler,
    submitFormHanlder,
  } = useContext(SignUpContext);

  return (
    <>
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
        {errors.name && <Alert severity="error">{errors.name}</Alert>}
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
          {errors.email && <Alert severity="error">{errors.email}</Alert>}{" "}
        </p>
        {/* Password */}
        <FormControl sx={{ m: 1, width: "100%" }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
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
        {errors.password && (
          <Alert severity="error">{errors.password}</Alert>
        )}{" "}
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
        {success && (
          <Alert severity="success">Form Submitted Successfully</Alert>
        )}
      </form>
    </>
  );
};

export default SignUp;
