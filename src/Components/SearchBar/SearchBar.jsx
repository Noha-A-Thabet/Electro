import { useState } from "react";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [elements, setElements] = useState([]);
  const [displayMenu, setDisplayMenu] = useState(false);

  const fetchData = async (input) => {
    const response = await fetch("../../../Data/db.json");
    const electroData = await response.json();
    const Electronics = electroData.Electronics;
    const result = Electronics.filter((electro) => {
      return electro.name.toLowerCase().includes(input);
    });
    setDisplayMenu(true);
    setElements(result);
  };

  const inputChangeHandler = (e) => {
    const value = e.target.value;
    setInput(value);
    if (value.length !== 0) {
      fetchData(value);
    } else {
      setElements([]);
      setDisplayMenu(false);
    }
  };

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
              width: "300px",
              backgroundColor: "white",
            }}
          >
            {elements.map((ele) => {
              return (
                <MenuItem
                  key={ele.id}
                  onClick={() => {
                    console.log(ele.id);
                  }}
                >
                  <ListItemText>{ele.name}</ListItemText>
                  <img src={ele.image} alt="" style={{ height: "20px" }} />
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
