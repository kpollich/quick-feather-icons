import React, { useState } from "react";
import { icons } from "feather-icons";

function App() {
  const [iconColor, setIconColor] = useState("dark");

  return (
    <div
      className={`w-full font-mono p-4 ${
        iconColor === "light" && "bg-gray-900 text-white"
      }`}
    >
      <h1 className="text-2xl">Quick Feather Icons</h1>
      <p className="mb-4">
        Quickly copy links to{" "}
        <a
          className="text-purple-500 underline hover:text-purple-700"
          href="https://feathericons.com/"
        >
          feather icons
        </a>
        . I originally created this site so I could easily use feather icons in{" "}
        <a
          className="text-purple-500 underline hover:text-purple-700"
          href="http://notion.so/"
        >
          Notion
        </a>
        . Click on any icon or its name to copy a link to to the image asset.
      </p>

      <div>
        Select Icon Color
        <div className="mb-5">
          <label htmlFor="dark" className="mr-3">
            Dark
          </label>
          <input
            type="radio"
            name="icon-color"
            id="dark"
            value="dark"
            checked={iconColor === "dark"}
            onChange={(e) => setIconColor(e.target.value)}
            className="mr-3"
          />
          <label htmlFor="light" className="mx-3">
            Light
          </label>
          <input
            type="radio"
            name="icon-color"
            id="light"
            value="light"
            checked={iconColor === "light"}
            onChange={(e) => setIconColor(e.target.value)}
            className="mr-3"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-4 md:gap-5 grid-cols-2 gap-3">
        {Object.keys(icons).map((key) => {
          const icon = icons[key];

          return (
            <div
              key={icon.name}
              onClick={() => {
                const link = `${process.env.REACT_APP_SITE_URL}/${iconColor}/${icon.name}.svg`;
                const textarea = document.createElement("textarea");
                textarea.value = link;

                textarea.setAttribute("readonly", "");
                textarea.style.position = "absolute";
                textarea.style.left = "-9999px";

                document.body.appendChild(textarea);
                textarea.select();

                document.execCommand("copy");
                document.body.removeChild(textarea);
              }}
            >
              <h1>{icon.name}</h1>

              <div dangerouslySetInnerHTML={{ __html: icon.toSvg() }} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
