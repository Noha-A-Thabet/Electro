import { createContext } from "react";

export const SingleProductContext = createContext({});

const displayProductData = (product) => {
  console.log(product);
};

// eslint-disable-next-line react/prop-types
const SinglePorductProvider = ({ children }) => {
  return (
    <SingleProductContext.Provider
      value={{
        displayProductData,
      }}
    >
      {children}
    </SingleProductContext.Provider>
  );
};

export default SinglePorductProvider;
