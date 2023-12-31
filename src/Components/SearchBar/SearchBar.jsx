import { useState } from "react";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

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
    console.log(elements);
  };

  const inputChangeHandler = (e) => {
    const value = e.target.value;
    setInput(value);

    fetchData(value);
  };
  return (
    <>
      <input
        type="text"
        name="value"
        value={input}
        onChange={inputChangeHandler}
      />
      {displayMenu && (
        <Paper sx={{ width: 320 }}>
          <MenuList dense>
            {elements.map((ele) => {
              return (
                <MenuItem key={ele.id}>
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
