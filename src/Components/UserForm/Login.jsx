import TextField from "@mui/material/TextField";
import { useContext, useState, useEffect } from "react";
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
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { showPassword, handleClickShowPassword, handleMouseDownPassword } =
    useContext(SignUpContext);

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

  useEffect(() => {
    if (userLogin) {
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
    return () => clearTimeout();
  }, [userLogin]);

  const userInputHandler = (e) => {
    const { name, value } = e.target;
    setUserAuth((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // for modal
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
