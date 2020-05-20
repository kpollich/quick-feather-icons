import React from "react";

function IconListItem({ icon, iconColor, onCopy }) {
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

        onCopy();
      }}
    >
      <h1>{icon.name}</h1>

      <div dangerouslySetInnerHTML={{ __html: icon.toSvg() }} />
    </div>
  );
}

export default IconListItem;
