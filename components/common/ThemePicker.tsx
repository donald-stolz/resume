import { FunctionComponent, useState, useRef, useEffect } from "react";
import { Theme, themes } from "./themes";

const ThemePicker: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
    setCurrentTheme(theme);
  };

  const handleColorChange = (
    colorType: keyof Theme["colors"],
    value: string
  ) => {
    const newTheme = {
      ...currentTheme,
      colors: {
        ...currentTheme.colors,
        [colorType]: value,
      },
    };
    applyTheme(newTheme);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="theme-picker" ref={dropdownRef}>
      <button
        className="theme-picker-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Theme picker"
      >
        <i className="fa fa-palette" />
      </button>
      {isOpen && (
        <div className="theme-picker-dropdown">
          <div className="theme-picker-section">
            <label>Primary</label>
            <input
              type="color"
              value={currentTheme.colors.primary}
              onChange={(e) => handleColorChange("primary", e.target.value)}
            />
          </div>
          <div className="theme-picker-section">
            <label>Secondary</label>
            <input
              type="color"
              value={currentTheme.colors.secondary}
              onChange={(e) => handleColorChange("secondary", e.target.value)}
            />
          </div>
          <div className="theme-picker-section">
            <label>Tertiary</label>
            <input
              type="color"
              value={currentTheme.colors.tertiary}
              onChange={(e) => handleColorChange("tertiary", e.target.value)}
            />
          </div>
          <div className="theme-picker-section">
            <label>Accent</label>
            <input
              type="color"
              value={currentTheme.colors.accent}
              onChange={(e) => handleColorChange("accent", e.target.value)}
            />
          </div>
          <div className="theme-picker-presets">
            {themes.map((theme) => (
              <button
                key={theme.name}
                className="theme-preset-button"
                onClick={() => applyTheme(theme)}
                title={theme.name}
              >
                <div className="theme-preset-colors">
                  <div style={{ backgroundColor: theme.colors.primary }} />
                  <div style={{ backgroundColor: theme.colors.secondary }} />
                  <div style={{ backgroundColor: theme.colors.tertiary }} />
                  <div style={{ backgroundColor: theme.colors.accent }} />
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemePicker;
