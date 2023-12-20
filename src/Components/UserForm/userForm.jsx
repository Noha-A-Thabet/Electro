import { Paper, Chip, Switch, Container } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import Person2Icon from "@mui/icons-material/Person2";
import { useState } from "react";
import SignUp from "./SignUp";
import Login from "./Login";

const UserForm = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <Paper
        elevation={3}
        style={{ padding: "20px", width: "500px", textAlign: "center" }}
      >
        {checked ? (
          <Chip
            icon={<LockIcon />}
            label="Sign up"
            color="primary"
            variant="outlined"
          />
        ) : (
          <Chip
            icon={<Person2Icon />}
            label="Log in"
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
        {checked ? <SignUp /> : <Login />}
      </Paper>
    </Container>
  );
};

export default UserForm;
