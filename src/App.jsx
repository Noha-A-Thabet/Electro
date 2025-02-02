import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Route, Routes } from "react-router-dom";
import Mobile from "./Pages/Mobile";
import Laptop from "./Pages/Laptop";
import Smartwatch from "./Pages/Smartwatch";
import Tablets from "./Pages/Tablets";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Wishlist from "./WishlistContext/wishlist";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import CategoryBar from "./Components/category-bar/CategoryBar";
import SingleProduct from "./Pages/SingleProduct";
import ErrorPage from "./Pages/ErrorPage";
import LoginForm from "./Components/UserAuth/Login";
import UserForm from "./Components/UserForm/userForm";
import SignUpForm from "./Components/UserAuth/SignUp";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route element={<CategoryBar />}>
            <Route index element={<Home />} />
            <Route path="mobile" element={<Mobile />} />
            <Route path="laptop" element={<Laptop />} />
            <Route path="smartwatch" element={<Smartwatch />} />
            <Route path="tablets" element={<Tablets />} />
            <Route path="cart" element={<Cart />} />
            <Route path="wishlist" element={<Wishlist />} />
            {/* <Route path=":id" element={<SingleProduct />} /> */}
            <Route path=":redirect/:id" element={<SingleProduct />} />
            <Route path="register" element={<UserForm />} />
            <Route path="signUp" element={<SignUpForm />} />
            <Route path="login" element={<LoginForm />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
