import { createContext, useState } from "react";

export const SearchContext = createContext({});

// eslint-disable-next-line react/prop-types
const SearchContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [elements, setElements] = useState([]);
  const [displayMenu, setDisplayMenu] = useState(false);

  // fetching Data
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

  // handle input
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
    <SearchContext.Provider
      value={{
        input,
        setInput,
        elements,
        setElements,
        fetchData,
        displayMenu,
        setDisplayMenu,
        inputChangeHandler,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
