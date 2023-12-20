import TextField from "@mui/material/TextField";
import { useState } from "react";
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

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      {/* Name */}
      <p>
        <TextField
          id="standard-basic"
          label="Username"
          variant="standard"
          fullWidth
          size="small"
        />
      </p>
      {/* Email */}
      <p>
        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          fullWidth
          size="small"
        />
      </p>

      {/* Password */}
      <FormControl sx={{ m: 1, width: "100%" }} variant="standard">
        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
        <Input
          id="standard-adornment-password"
          type={showPassword ? "text" : "password"}
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
      <p>
        <Button
          fullWidth
          variant="contained"
          startIcon={<LoginIcon />}
          sx={{ marginTop: "20px" }}
        >
          sign up
        </Button>
      </p>
    </>
  );
};

export default SignUp;
