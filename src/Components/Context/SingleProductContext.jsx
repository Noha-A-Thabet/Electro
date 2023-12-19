import { createContext } from "react";
export const SingleProductContext = createContext({});
import data from "../../../Data/db.json";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

// find element
const searchForElement = (id) => {
  const foundedElement = data.Electronics.find((item) => {
    return item.id === id;
  });
  return foundedElement;
};

// Item for Grid design
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#101010" : "gray.200",
  border: "none",
  ...theme.typography.body2,
  padding: theme.spacing(0.6),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

// eslint-disable-next-line react/prop-types
const SingProductProvider = ({ children }) => {
  return (
    <SingleProductContext.Provider value={{ searchForElement, Item }}>
      {children}
    </SingleProductContext.Provider>
  );
};

export default SingProductProvider;
