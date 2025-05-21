import { FunctionComponent, ChangeEvent } from "react";

interface Theme {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    accent: string;
  };
}

const themes: Theme[] = [
  {
    name: "Default",
    colors: {
      primary: "#194769",
      secondary: "#f6f6e9",
      tertiary: "#d7eef2",
      accent: "#f2855e",
    },
  },
  {
    name: "Dark",
    colors: {
      primary: "#2c3e50",
      secondary: "#34495e",
      tertiary: "#7f8c8d",
      accent: "#e74c3c",
    },
  },
  {
    name: "Light",
    colors: {
      primary: "#3498db",
      secondary: "#ecf0f1",
      tertiary: "#bdc3c7",
      accent: "#e67e22",
    },
  },
];

const ThemePicker: FunctionComponent = () => {
  const applyTheme = (theme: Theme) => {
    document.documentElement.style.setProperty(
      "--primary-palette-color",
      theme.colors.primary
    );
    document.documentElement.style.setProperty(
      "--secondary-palette-color",
      theme.colors.secondary
    );
    document.documentElement.style.setProperty(
      "--tertiary-palette-color",
      theme.colors.tertiary
    );
    document.documentElement.style.setProperty(
      "--accent-palette-color",
      theme.colors.accent
    );
  };

  const handleThemeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const theme = themes.find((t) => t.name === e.target.value);
    if (theme) applyTheme(theme);
  };

  return (
    <div className="theme-picker">
      <select onChange={handleThemeChange} defaultValue="Default">
        {themes.map((theme) => (
          <option key={theme.name} value={theme.name}>
            {theme.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ThemePicker;
