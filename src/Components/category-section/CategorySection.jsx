import Tablet from "../Tablet/Tablet";
import SmartWatches from "../smart-watches/SmartWatches";
import Laptop from "../Laptop/Laptop";
import Container from "@mui/material/Container";
import Mobiles from "../Mobile/Mobiles";

const CategorySection = () => {
  return (
    <Container maxWidth="lg" sx={{ minHeigh: "100vh", position: "relative" }}>
      <Mobiles />
      <Tablet />
      <Laptop />
      <SmartWatches />
    </Container>
  );
};

export default CategorySection;
