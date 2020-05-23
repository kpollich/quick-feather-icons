import React from "react";

function IconListItem({ icon, iconColor, onCopy }) {
  function handleClick() {
    const params = new URLSearchParams();
    params.set("name", icon.name);
    params.set("color", iconColor);

    const link = `${window.location.href}api/icon?${params.toString()}`;

    const textarea = document.createElement("textarea");
    textarea.value = link;

    textarea.setAttribute("readonly", "");
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";

    document.body.appendChild(textarea);
    textarea.select();

    document.execCommand("copy");
    document.body.removeChild(textarea);

    onCopy();
  }

  return (
    <div key={icon.name} onClick={handleClick} className="cursor-pointer">
      <h1>{icon.name}</h1>

      <div
        dangerouslySetInnerHTML={{ __html: icon.toSvg({ color: iconColor }) }}
      />
    </div>
  );
}

export default IconListItem;
