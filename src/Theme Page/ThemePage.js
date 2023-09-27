import React, { useState } from "react";
import "./ThemePage.scss";
function ThemePage() {
  const [theme, setTheme] = useState("light");
  const [customColor, setCustomColor] = useState("#10C61C");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleCustomColorChange = (event) => {
    setCustomColor(event.target.value);
  };

  const applyCustomTheme = () => {
    document.documentElement.style.setProperty("--custom-color", customColor);
  };

  return (
    <div className={`theme-page ${theme}`}>
      <main>
        <div className="theme-controls">
          <button onClick={toggleTheme}>Toggle Theme</button>
          <input
            type="color"
            value={customColor}
            onChange={handleCustomColorChange}
          />
          <button onClick={applyCustomTheme}>Apply Custom Theme</button>
        </div>
        <div className="content">

          <h3>
            We’re bringing the future of Physical Therapy clinic management to
            the present.
          </h3>
          <h4>Clinic management that helps physical therapists care for more patients.</h4>
          <h5>We’re building a system that empowers physicians and helps physical therapy clinics realize their full revenue potential.

We’re here to:

Ease the burden on your staff.

Ensure patients regain movement and achieve their clinical goals.

Reduce admin costs.

Improve revenue management.

Help you heal more patients.

Help you provide comprehensive treatment to patients.</h5>
<h2>Spry was founded in 2021 to transform archaic physical healthcare processes.</h2>
<h3>
Spry began when a worn-down physiotherapist complained about the lack of any comprehensive, new-age tech for physical therapy clinics to our co-founder Brijraj Bhuptani.
Further research proved her right.
Most physical therapy platforms just claimed to be end-to-end, but did not provide smooth, effortless sync between modules, that Brij, as the former Ola CTO, knew was crucial for scale.
Physical therapists were basically stuck with 5-7 disparate point tools that meant running from pillar to post for every small task.</h3>
        </div>
      </main>
    </div>
  );
}

export default ThemePage;
