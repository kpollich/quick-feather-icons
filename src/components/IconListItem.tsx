import React from "react";
import { FeatherAttributes } from "feather-icons";

import { copy } from "../utils/clipboard";

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
    copy(link);

    onCopy();
  }

  return (
    <button
      onClick={handleClick}
      className="cursor-pointer rounded p-1 border border-transparent hover:border-current flex flex-col focus:outline-none focus:ring-1 ring-current"
    >
      <h3>{icon.name}</h3>

      <div
        dangerouslySetInnerHTML={{ __html: icon.toSvg({ color: iconColor }) }}
      />
    </button>
  );
};

export default IconListItem;
