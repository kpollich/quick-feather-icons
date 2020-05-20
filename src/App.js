import React, { useState } from "react";
import { icons } from "feather-icons";

function App() {
  const [iconColor, setIconColor] = useState("dark");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [filter, setFilter] = useState("");

  function showToast() {
    const visibleForMs = 2000;

    setShowSuccessAlert(true);

    setTimeout(() => {
      setShowSuccessAlert(false);
    }, visibleForMs);
  }

  return (
    <div
      className={`min-w-screen min-h-screen font-mono p-4 ${
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

      <div>
        <input
          placeholder="Filter"
          className="border border-gray-300 text-black mb-4 pl-1 bg-white focus:outline-none focus:shadow-outline appearance-none leading-normal"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <div className="grid md:grid-cols-4 md:gap-5 grid-cols-2 gap-3">
        {Object.keys(icons)
          .filter((key) => {
            if (!filter) {
              return true;
            }

            return (
              icons[key].tags.some((tag) => tag.includes(filter)) ||
              key.includes(filter)
            );
          })
          .map((key) => {
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

                  showToast();
                }}
              >
                <h1>{icon.name}</h1>

                <div dangerouslySetInnerHTML={{ __html: icon.toSvg() }} />
              </div>
            );
          })}
      </div>

      {showSuccessAlert && (
        <div className="bg-green-100 border border-green-100 text-green-700 px-4 py-3 rounded fixed bottom-0 right-0 m-3">
          Successfully Copied Link
        </div>
      )}
    </div>
  );
}

export default App;
