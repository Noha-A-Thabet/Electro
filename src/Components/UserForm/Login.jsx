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
  Container,
  Modal,
  Box,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";
import { SignUpContext } from "../Context/SignUpContext";
import "./form.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { LoginContext } from "../Context/LoginContext";
import { Link } from "react-router-dom";

const Login = () => {
  const { showPassword, handleClickShowPassword, handleMouseDownPassword } =
    useContext(SignUpContext);

  const {
    errors,
    open,
    userName,
    alert,
    userAuth,
    handleClose,
    handleOpen,
    userInputHandler,
    style,
    submitFormHanlder,
    userLogin,
  } = useContext(LoginContext);

  return (
    <Container>
      <form
        onSubmit={submitFormHanlder}
        style={{
          padding: "20px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
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
        {errors.password && <Alert severity="error">{errors.password}</Alert>}
        <p>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            startIcon={<LoginIcon />}
            sx={{ marginTop: "20px" }}
            onClick={() => {
              handleOpen();
            }}
          >
            Login
          </Button>
        </p>
        {alert && (
          <Alert severity="error">
            Your email and password do not match please try again
          </Alert>
        )}
      </form>

      <Box>
        <Link to="/signUp">
          <Typography variant="p" sx={{ color: "black" }}>
            Create new account
          </Typography>
        </Link>
      </Box>

      {/* modal for user */}

      {userLogin && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              style={{
                color: "green",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CheckCircleIcon style={{ fontSize: "40px" }} />
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
              variant="h6"
            >
              Login Successfully Welcome
              <span
                style={{
                  color: "green",
                  textTransform: "uppercase",
                  fontSize: "20px",
                  paddingLeft: "5px",
                }}
              >
                {userName}
              </span>
            </Typography>
          </Box>
        </Modal>
      )}
    </Container>
  );
};

export default Login;
