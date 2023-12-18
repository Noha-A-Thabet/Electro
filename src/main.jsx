import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import CartContextProvider from "./Components/Context/CartContext.jsx";
import WishlistProvider from "./WishlistContext/WishlistProvider";
import SearchContextProvider from "./Components/Context/SearchContext.jsx";
import SinglePorductProvider from "./Components/Context/SingleProduct.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SinglePorductProvider>
        <CartContextProvider>
          <SearchContextProvider>
            <WishlistProvider>
              <App />
            </WishlistProvider>
          </SearchContextProvider>
        </CartContextProvider>
      </SinglePorductProvider>
    </BrowserRouter>
  </React.StrictMode>
);
