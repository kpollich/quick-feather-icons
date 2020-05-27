import React from "react";
import { FeatherAttributes } from "feather-icons";

interface Props {
  icon: {
    name: string;
    toSvg: (options: FeatherAttributes) => string;
  };
  iconColor: string;
  onCopy: () => void;
}

const IconListItem: React.FC<Props> = ({ icon, iconColor, onCopy }) => {
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
    <div
      onClick={handleClick}
      className="cursor-pointer rounded p-1 border border-transparent hover:border-current"
    >
      <h3>{icon.name}</h3>

      <div
        dangerouslySetInnerHTML={{ __html: icon.toSvg({ color: iconColor }) }}
      />
    </div>
  );
};

export default IconListItem;
