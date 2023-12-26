import { Paper, Chip, Switch, Container } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import Person2Icon from "@mui/icons-material/Person2";
import { useContext } from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import { SignUpContext } from "../Context/SignUpContext";

const UserForm = () => {
  const { checked, handleChange } = useContext(SignUpContext);

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
        marginTop: "50px",
      }}
    >
      <Paper
        elevation={3}
        style={{
          padding: "20px",
          width: "500px",
          textAlign: "center",
          marginTop: "80px",
        }}
      >
        {checked ? (
          <Chip
            icon={<Person2Icon />}
            label="Login"
            color="primary"
            variant="outlined"
          />
        ) : (
          <Chip
            icon={<LockIcon />}
            label="SignUp"
            color="primary"
            variant="outlined"
          />
        )}

        <br />
        <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />

        <br />
        {checked ? <Login /> : <SignUp />}
      </Paper>
    </Container>
  );
};

export default UserForm;
