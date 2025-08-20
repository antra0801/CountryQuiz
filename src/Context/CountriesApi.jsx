import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

export const APIContext = createContext();

const ContextProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  
//   const [randomQuestion , setRadomQuestions] =  useState([]);

//       const generateRandomNumbers = (length, min, max) => {
//     return Array.from({ length }, () =>
//       Math.floor(Math.random() * (max - min + 1)) + min
//     );
// }

//     const randomnum = generateRandomNumbers()
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all?fields=name,flags,capital,languages")
      .then((response) => setCountries(response.data.slice(0,10)))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log(countries);
  
  return (
    <APIContext.Provider value={{countries}}>
      {children}
    </APIContext.Provider>
  );
};

export const useCountries = () => {
  return useContext(APIContext);
};

export default ContextProvider;
