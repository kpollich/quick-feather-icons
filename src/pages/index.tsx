import React, { useState } from "react";
import { icons } from "feather-icons";

import IconListItem from "../components/IconListItem";

function IndexPage() {
  const [iconColor, setIconColor] = useState("");
  const [filter, setFilter] = useState("");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  function showToast() {
    const visibleForMs = 2000;

    setShowSuccessAlert(true);

    setTimeout(() => {
      setShowSuccessAlert(false);
    }, visibleForMs);
  }

  return (
    <div className="min-w-screen min-h-screen font-mono p-4 bg-gray-900 text-white">
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
        <label>Icon Color (any valid CSS color): </label>
        <input
          placeholder="#000"
          className="text-white mb-4 pl-1 bg-gray-600 focus:outline-none focus:shadow-outline appearance-none leading-normal"
          value={iconColor}
          onChange={(e) => setIconColor(e.target.value)}
        />
      </div>

      <div>
        <label>Search: </label>
        <input
          type="search"
          className="text-white mb-4 px-1 bg-gray-600 focus:outline-none focus:shadow-outline appearance-none leading-normal"
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
              icons[key].tags.some((tag) =>
                tag.includes(filter.toLowerCase())
              ) || key.includes(filter.toLowerCase())
            );
          })
          .map((key) => {
            const icon = icons[key];

            return (
              <IconListItem
                icon={icon}
                iconColor={iconColor}
                onCopy={() => showToast()}
              />
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

export default IndexPage;
