import { useContext } from "react";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { SearchContext } from "../Context/SearchContext";

const SearchBar = () => {
  const {
    input,
    setDisplayMenu,
    elements,
    displayMenu,
    setInput,
    inputChangeHandler,
  } = useContext(SearchContext);

  return (
    <>
      <TextField
        id="standard-basic"
        label="Search"
        variant="standard"
        value={input}
        onChange={inputChangeHandler}
        sx={{
          width: "180px",
          marginTop: "-10px",
        }}
      />

      {displayMenu && (
        <Paper sx={{ width: 320 }}>
          <MenuList
            dense
            style={{
              maxHeight: "130px",
              overflowY: "scroll",
              position: "absolute",
              zIndex: "4000",
              width: "320px",
              backgroundColor: "white",
            }}
          >
            {elements.map((ele) => {
              const { name, image, id } = ele;
              return (
                <MenuItem
                  key={id}
                  onClick={() => {
                    setDisplayMenu(false);
                    setInput(name);
                  }}
                  // again
                  onBlur={() => {
                    console.log("blur");
                    setInput("");
                  }}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Link
                    to={`/${name}/${id}`}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <ListItemText>{name}</ListItemText>
                  </Link>

                  <img src={image} alt="" style={{ height: "20px" }} />
                </MenuItem>
              );
            })}
          </MenuList>
        </Paper>
      )}
    </>
  );
};
export default SearchBar;
