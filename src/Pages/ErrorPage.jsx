import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { Box, Typography, Container } from "@mui/material";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <Container>
      <Box>
        <SentimentVeryDissatisfiedIcon sx={{ fontSize: "50px" }} />
        <Typography variant="h3">404</Typography>
        <Typography variant="h4">Page not found</Typography>

        <Typography variant="h4">
          Go Back{" "}
          <Link to="/">
            <span>Home</span>
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default ErrorPage;
