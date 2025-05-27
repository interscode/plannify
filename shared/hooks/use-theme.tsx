import { createContext, useContext, useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import { useColorScheme as useNativewindColorScheme } from "nativewind";

type Theme = "light" | "dark";
type CurrentTheme = "System" | "Light" | "Dark";

interface ThemeContextType {
  theme: Theme;
  currentTheme: CurrentTheme;
  setCurrentTheme: (theme: CurrentTheme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>("light");
  const [currentTheme, setCurrentTheme] = useState<CurrentTheme>("System");
  const colorScheme = useColorScheme();
  const { setColorScheme } = useNativewindColorScheme();

  useEffect(() => {
    if (currentTheme === "System") {
      setTheme(colorScheme as Theme);
      setColorScheme("system");
    }
    if (currentTheme === "Light") {
      setTheme("light");
      setColorScheme("light");
    }
    if (currentTheme === "Dark") {
      setTheme("dark");
      setColorScheme("dark");
    }
  }, [currentTheme, colorScheme]);

  return (
    <ThemeContext.Provider value={{ theme, currentTheme, setCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
