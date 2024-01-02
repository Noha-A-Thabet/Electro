import { createContext } from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
export const CartContext = createContext({});
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// eslint-disable-next-line react/prop-types
const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // addToCart Function
  const addToCartHandler = (product) => {
    let updatedItem;
    const exsitingProduct = cartItems.find((item) => item.id === product.id);
    if (exsitingProduct) {
      updatedItem = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedItem = [...cartItems, { ...product, quantity: 1 }];
    }
    toast.success(
      `${product.name} Added To Your Bag successfully
    `,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
      }
    );
    setCartItems(updatedItem);
    // update added item in Local storage
    localStorage.setItem("cartItems", JSON.stringify(updatedItem));
  };

  // removeFromCartIcon Function
  const removeFromCartIcon = (product) => {
    let removedItem;
    const exsitingItem = cartItems.find((item) => item.id === product.id);
    if (exsitingItem.quantity === 1) {
      removedItem = cartItems.filter((item) => item.id !== product.id);
    } else {
      removedItem = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      );
    }
    toast.error(
      `${product.name} Removed From Your Bag
    `,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
      }
    );
    setCartItems(removedItem);
    // update removed item in Local storage
    localStorage.setItem("cartItems", JSON.stringify(removedItem));
  };

  // start design
  function Item(props) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          p: 1,
          m: 1,
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#101010" : "white.100",
          color: (theme) =>
            theme.palette.mode === "dark" ? "grey.300" : "grey.800",

          borderColor: (theme) =>
            theme.palette.mode === "dark" ? "grey.800" : "grey.300",
          borderRadius: 2,
          fontSize: "0.875rem",
          fontWeight: "700",
          ...sx,
        }}
        {...other}
      />
    );
  }
  Item.propTypes = {
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: PropTypes.oneOfType([
      PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
      ),
      PropTypes.func,
      PropTypes.object,
    ]),
  };
  // end design

  // get items from local storage
  const items = JSON.parse(localStorage.getItem("cartItems")) || [];

  // get totalAmount
  const total = items.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  // clear cartItmes
  const clearCartItems = () => {
    setCartItems([]);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCartHandler,
        removeFromCartIcon,
        Item,
        items,
        total,
        clearCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
