import { useParams } from "react-router-dom";
import { useContext } from "react";
import { SingleProductContext } from "../Components/Context/SingleProductContext";
import { Grid, Box, Typography, Rating } from "@mui/material";
import "../Pages/singlePorduct.css";
import { CartContext } from "../Components/Context/CartContext";
import { WishlistContext } from "../WishlistContext/WishlistProvider";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const SingleProduct = () => {
  const { searchForElement } = useContext(SingleProductContext);
  const { addToCartHandler } = useContext(CartContext);
  const { handleFavorite, Item } = useContext(WishlistContext);

  const { id } = useParams();
  const item = searchForElement(+id);

  const { name, image, price, type } = item;

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {/* image */}
        <Grid item md={6} xs={12}>
          <Item className="product-image">
            <img src={image} alt="" />
          </Item>
        </Grid>

        {/* Second Grid */}
        <Grid item md={6} xs={12}>
          {/* Name */}
          <Item>
            <Typography variant="h5" sx={{ color: "black" }}>
              {name}
            </Typography>
          </Item>
          {/* Rating */}
          <Item>
            <Box>
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            </Box>
          </Item>

          {/* price */}
          <Item>
            <Typography variant="h6">Price : ${price}</Typography>
          </Item>

          {/* type*/}
          <Item>
            <Typography variant="h6">Category : {type}</Typography>
          </Item>

          {/* add to cart*/}
          <Item>
            <AddShoppingCartOutlinedIcon
              onClick={() => {
                addToCartHandler(item);
              }}
            />
            {/* add to whishList */}
            <FavoriteBorderOutlinedIcon
              onClick={() => {
                handleFavorite(item);
              }}
            />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SingleProduct;
