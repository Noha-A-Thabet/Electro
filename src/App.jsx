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
import Login from "./Components/UserForm/Login";
import SignUp from "./Components/UserForm/SignUp";
import UserForm from "./Components/UserForm/userForm";

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
            <Route path=":id" element={<SingleProduct />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="userForm/login" element={<Login />} />
            <Route path="userForm/signUp" element={<SignUp />} />
            <Route path="userForm" element={<UserForm />} />
          </Route>
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
