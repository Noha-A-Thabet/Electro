// import { createContext } from "react";
// import data from "../../../Data/db.json";

// export const SingleProductContext = createContext({});

// const displayProductData = (productId) => {
//   const item = data.Electronics.find((item) => {
//     return item.id == productId;
//   });
//   return item;
// };

// // eslint-disable-next-line react/prop-types
// const SinglePorductProvider = ({ children }) => {
//   return (
//     <SingleProductContext.Provider
//       value={{
//         displayProductData,
//       }}
//     >
//       {children}
//     </SingleProductContext.Provider>
//   );
// };

// export default SinglePorductProvider;

import { createContext } from "react";
export const SingleProductContext = createContext({});
import data from "../../../Data/db.json";

// find element
const searchForElement = (id) => {
  const foundedElement = data.Electronics.find((item) => {
    return item.id === id;
  });
  return foundedElement;
};

// eslint-disable-next-line react/prop-types
const SingProductProvider = ({ children }) => {
  return (
    <SingleProductContext.Provider value={{ searchForElement }}>
      {children}
    </SingleProductContext.Provider>
  );
};

export default SingProductProvider;
