export interface Theme {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    accent: string;
  };
}

export const themes: Theme[] = [
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
      primary: "#1a1a1a",
      secondary: "#2d2d2d",
      tertiary: "#3d3d3d",
      accent: "#4a9eff",
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
