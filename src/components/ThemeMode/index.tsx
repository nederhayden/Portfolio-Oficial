// react
import { useEffect, useState } from "react";

export default function ThemeMode() {
  const [darkTheme, setDarkTheme] = useState<any>(undefined);

  const handleToggle = (event: any) => {
    setDarkTheme(event.target.checked);
  };

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        console.log(darkTheme);
        // Set value of  darkmode to dark
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        // Set value of  darkmode to light
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [darkTheme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );
    // Set initial darkmode to light
    setDarkTheme(initialColorValue === "dark");
  }, []);

  return (
    <>
      {darkTheme !== undefined && (
        <label className="switch">
          <input type="checkbox" checked={darkTheme} onChange={handleToggle} />
          <span className="slider" />
        </label>
      )}
    </>
  );
}
