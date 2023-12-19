import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// import FavoriteIcon from '@mui/icons-material/Favorite';
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "../category-section/Category.css";
import { WishlistContext } from "../../WishlistContext/WishlistProvider";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const TabletList = ({ data }) => {
  const { addToCartHandler } = useContext(CartContext);
  const { handleFavorite, Item } = useContext(WishlistContext);

  // eslint-disable-next-line react/prop-types
  const { name, image, price, id } = data;

  return (
    <Grid item xs={6} md={3} spacing={3}>
      <Item className="product-image">
        <div className="wishlist">
          <FavoriteBorderOutlinedIcon
            onClick={() => {
              handleFavorite(data);
            }}
          />
        </div>
        <Link to={`/${id}`} style={{ textDecoration: "none" }}>
          <img src={image} />
        </Link>
      </Item>
      <Item className="product">
        <Box className="product-details">
          <Item sx={{ flexGrow: 1 }}>
            <Link to={`/${id}`} style={{ textDecoration: "none" }}>
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

export default TabletList;
