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
  Paper,
  Box,
  Typography,
  Container,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";
import { SignUpContext } from "../Context/SignUpContext";
import "../UserForm/form.css";
import { Link } from "react-router-dom";

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
    <Container
      maxWidth="lg"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "70vh",
      }}
    >
      <Paper
        elevation={3}
        style={{
          padding: "20px",
          width: "100%",
          textAlign: "center",
          marginTop: "80px",
        }}
      >
        <form
          onSubmit={submitFormHanlder}
          style={{
            padding: "20px",
            width: "100%",
            display: "flex",
            height: "40vh",
            flexDirection: "column",
          }}
        >
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
          {errors.name && (
            <Typography sx={{ color: "red" }}>{errors.name}</Typography>
          )}
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
            {errors.email && (
              <Typography sx={{ color: "red" }}>{errors.email}</Typography>
            )}{" "}
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
            <Typography sx={{ color: "red" }}>{errors.password}</Typography>
          )}
          <p>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              startIcon={<LoginIcon />}
              sx={{ marginTop: "23px" }}
            >
              sign up
            </Button>
          </p>
          {success && (
            <Alert severity="success" sx={{ marginTop: "15px" }}>
              Form Submitted Successfully
            </Alert>
          )}
        </form>
        <Box>
          <Link to="/login">
            <Typography variant="p" sx={{ color: "black" }}>
              Already a Member ? Log in
            </Typography>
          </Link>
        </Box>
      </Paper>
    </Container>
  );
};

export default SignUp;
