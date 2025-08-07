import { useEffect, useState, type ReactNode } from "react";
import type { ThemeType } from "../types";
import { ThemeContext } from "../contexts/context";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>("light");
//   const [themeState, setThemeState] = useState(false)

  const toggleTheme = () => {
    setTheme((prevTheme ) => (prevTheme === 'light' ? 'dark' : 'light'))
  };

  useEffect(() => {
    document.body.classList.remove('light', 'dark')
    document.body.classList.add(theme)

  },[theme])
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider
