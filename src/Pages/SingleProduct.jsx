// import { useParams } from "react-router-dom";
// import { SingleProductContext } from "../Components/Context/SingleProductContext";
// import { useContext } from "react";
// import { Grid, Typography } from "@mui/material";

// const SingleProduct = () => {
//   const { displayProductData } = useContext(SingleProductContext);
//   const { id } = useParams();
//   const item = displayProductData(+id);

//   const { name, price, image } = item;
//   return (
//     <Grid container>
//       <Grid item xs={4}>
//         <img src={image} alt="" />
//       </Grid>
//       <Grid item xs={4}>
//         <Typography variant="h4">{name}</Typography>
//         <Typography variant="h5">${price}</Typography>
//       </Grid>
//     </Grid>
//   );
// };

// export default SingleProduct;

import { useParams } from "react-router-dom";
import { useContext } from "react";
import { SingleProductContext } from "../Components/Context/SingleProductContext";

const SingleProduct = () => {
  const { searchForElement } = useContext(SingleProductContext);

  const { id } = useParams();

  const item = searchForElement(+id);
  console.log(item);
  return <div>{id}</div>;
};

export default SingleProduct;
