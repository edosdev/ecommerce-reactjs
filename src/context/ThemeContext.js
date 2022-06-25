import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [temaOscuro, setTemaOcuro] = useState(false);
  const data = {
    temaOscuro,
  };

  return (
    <ThemeContext.Provider value={data}>
    {children}
    </ThemeContext.Provider>
  )
};

export { ThemeContext };
export default ThemeProvider;
