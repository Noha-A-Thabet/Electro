import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { WishlistContext } from "../../WishlistContext/WishlistProvider";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// eslint-disable-next-line react/prop-types
const LaptopList = ({ data }) => {
  const { addToCartHandler } = useContext(CartContext);
  const { handleFavorite, Item } = useContext(WishlistContext);
  // eslint-disable-next-line react/prop-types
  const { name, image, price, id } = data;

  return (
    <Grid item xs={6} md={3} spacing={3}>
      <ToastContainer />
      <Item className="product-image">
        <div className="wishlist">
          <FavoriteBorderOutlinedIcon
            onClick={() => {
              handleFavorite(data);
            }}
          />
        </div>

        <Link to={`/${name}/${id}`} style={{ textDecoration: "none" }}>
          <img src={image} />
        </Link>
      </Item>
      <Item className="product">
        <Box className="product-details">
          <Item sx={{ flexGrow: 1 }}>
            <Link to={`/${name}/${id}`} style={{ textDecoration: "none" }}>
              <h3 className="product-title">{name}</h3>
            </Link>
          </Item>
          <Item className="cart-icon">
            <AddShoppingCartOutlinedIcon
              onClick={() => {
                addToCartHandler(data);
              }}
            />
          </Item>
        </Box>
        <div className="ratings-container">
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        </div>
        <div className="product-price">${price}</div>
      </Item>
    </Grid>
  );
};

export default LaptopList;
