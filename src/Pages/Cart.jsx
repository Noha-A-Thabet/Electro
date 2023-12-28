import { useContext } from "react";
import { CartContext } from "../Components/Context/CartContext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { Typography, Button, Container, Box } from "@mui/material";
import "./cart.css";
import { LoginContext } from "../Components/Context/LoginContext";
import { useNavigate } from "react-router";

const Cart = () => {
  const { userLogin } = useContext(LoginContext);
  const { removeFromCartIcon, addToCartHandler, items, total, clearCartItems } =
    useContext(CartContext);

  const navigate = useNavigate();
  const checkOutProcess = () => {
    if (!userLogin) {
      navigate("/login");
    } else {
      navigate("/cart");
    }
  };

  return (
    <Container maxWidth="lg" sx={{ height: "100vh" }}>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead className="wishlist-thead">
            <TableRow>
              <TableCell>Product image</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Qty</TableCell>
              <TableCell>subTotal</TableCell>
              <TableCell>Add</TableCell>
              <TableCell>Remove</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.length === 0 && <h1>Fill your cart with tech dreams.</h1>}

            {items.map((item, index) => {
              // get subTotal
              const subTotal = (item.quantity * item.price).toFixed(2);
              return (
                <TableRow
                  key={index}
                  className="product-row"
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    className="fav-product-image"
                  >
                    <img src={item.image} className="thumbnail" />
                  </TableCell>

                  <TableCell component="th" scope="row">
                    {item.name}
                  </TableCell>

                  <TableCell component="th" scope="row">
                    ${item.price}
                  </TableCell>

                  <TableCell component="th" scope="row">
                    {item.quantity}
                  </TableCell>

                  <TableCell component="th" scope="row">
                    ${subTotal}
                  </TableCell>

                  <TableCell component="th" scope="row">
                    <button
                      className="remove-btn"
                      onClick={() => {
                        addToCartHandler(item);
                      }}
                    >
                      <AddIcon />
                    </button>
                  </TableCell>

                  <TableCell component="th" scope="row">
                    <button
                      className="remove-btn"
                      onClick={() => {
                        removeFromCartIcon(item);
                      }}
                    >
                      <DeleteIcon />
                    </button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        {items.length !== 0 && (
          <>
            <hr />
            <TableCell
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Typography variant="h6">Total : ${total.toFixed(2)}</Typography>
              <Box>
                <Button
                  variant="contained"
                  color="success"
                  style={{ marginRight: "5px" }}
                  onClick={() => {
                    checkOutProcess();
                  }}
                >
                  Checkout
                </Button>

                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => {
                    clearCartItems();
                  }}
                >
                  Clear Cart
                </Button>
              </Box>
            </TableCell>
          </>
        )}
      </TableContainer>
    </Container>
  );
};

export default Cart;
