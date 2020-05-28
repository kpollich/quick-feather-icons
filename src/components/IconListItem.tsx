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
