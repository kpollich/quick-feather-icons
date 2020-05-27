import React, { useState } from "react";
import { icons } from "feather-icons";
import { Sun, Moon } from "react-feather";

import IconListItem from "../components/IconListItem";

function IndexPage() {
  const [theme, setTheme] = useState("dark");
  const [iconColor, setIconColor] = useState("");
  const [filter, setFilter] = useState("");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const filteredIcons = Object.keys(icons)
    .filter((key) => {
      if (!filter) {
        return true;
      }

      return (
        icons[key].tags.some((tag) => tag.includes(filter.toLowerCase())) ||
        key.includes(filter.toLowerCase())
      );
    })
    .map((key) => icons[key]);

  function showToast() {
    const visibleForMs = 2000;

    setShowSuccessAlert(true);

    setTimeout(() => {
      setShowSuccessAlert(false);
    }, visibleForMs);
  }

  return (
    <main className={`min-h-screen font-mono p-4 theme-${theme}`}>
      <div className="max-w-screen-xl md:m-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl">Quick Feather Icons</h1>

          <button
            onClick={() =>
              theme === "dark" ? setTheme("light") : setTheme("dark")
            }
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </button>
        </div>

        <p className="mb-4">
          Quickly copy links to{" "}
          <a href="https://feathericons.com/">feather icons</a>. I originally
          created this site so I could easily use feather icons in{" "}
          <a href="http://notion.so/">Notion</a>. Click on any icon or its name
          to copy a link to to the image asset.
        </p>

        <div>
          <label>Icon Color (any valid CSS color): </label>
          <input
            placeholder={theme === "dark" ? "#FFF" : "#000"}
            className="mb-4 pl-1"
            value={iconColor}
            onChange={(e) => setIconColor(e.target.value)}
          />
        </div>

        <div>
          <label>Search: </label>
          <input
            type="search"
            className="mb-4 px-1"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>

        <div className="grid md:grid-cols-4 md:gap-5 grid-cols-2 gap-3">
          {filteredIcons.length > 0 ? (
            filteredIcons.map((icon) => (
              <IconListItem
                key={icon.name}
                icon={icon}
                iconColor={iconColor}
                onCopy={() => showToast()}
              />
            ))
          ) : (
            <span>No icons found</span>
          )}
        </div>

        {showSuccessAlert && (
          <div className="bg-green-100 border border-green-100 text-green-700 px-4 py-3 rounded fixed bottom-0 right-0 m-3">
            Successfully Copied Link
          </div>
        )}
      </div>
    </main>
  );
}

export default IndexPage;
