import { createContext, useContext, useState } from "react";
import { PRODUCTS_SECTION1, PRODUCTS_SECTION2, PRODUCTS_SECTION3 } from "../data/data";

const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const searchProducts = (searchText) => {
    const allProducts = [...PRODUCTS_SECTION1, ...PRODUCTS_SECTION2, ...PRODUCTS_SECTION3];
    const results = allProducts.filter((product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );

    setSearchInput(searchText);
    setSearchResults(results);
  };

  return (
    <SearchContext.Provider value={{ searchResults, searchProducts, searchInput }}>
      {children}
    </SearchContext.Provider>
  );
};

const useSearchContext = () => useContext(SearchContext);

export { SearchContextProvider, useSearchContext, SearchContext };
