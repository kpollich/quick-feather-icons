import React from "react";

function IconListItem({ icon, iconColor, onCopy }) {
  function handleClick() {
    const link = `${process.env.NEXT_PUBLIC_SITE_URL}/${iconColor}/${icon.name}.svg`;
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
    <div key={icon.name} onClick={handleClick}>
      <h1>{icon.name}</h1>

      <div dangerouslySetInnerHTML={{ __html: icon.toSvg() }} />
    </div>
  );
}

export default IconListItem;
