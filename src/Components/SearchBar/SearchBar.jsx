import { useContext } from "react";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import { SearchContext } from "../Context/SearchContext";
import "./searchBar.css";
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
      <input
        className="searchInput"
        id="standard-basic"
        type="search"
        placeholder="Search"
        value={input}
        onChange={inputChangeHandler}
        onBlur={() => {
          setInput("");
        }}
        style={{
          width: "260px",
          height: "30px",
          padding: "10px",
          border: "1px solid lightGray",
        }}
      />

      {displayMenu && (
        <Paper sx={{ width: 320 }}>
          <MenuList
            dense
            className="resultMenu"
            style={{
              maxHeight: "130px",
              overflowY: "scroll",
              position: "absolute",
              zIndex: "4000",
              width: "260px",
              backgroundColor: "white",
            }}
          >
            {elements.map((ele) => {
              const { name, image, id } = ele;
              return (
                <MenuItem
                  key={id}
                  className="resultInfo"
                  onClick={() => {
                    setDisplayMenu(false);
                    setInput(name);
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
