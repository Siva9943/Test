import React, { useState } from "react";

const colors = [
  "gradient1",
  "gradient2",
  "gradient3",
  "gradient4",
  "gradient5",
  "gradient6"
];

const MysteryBox = ({ onReveal }) => {

  const [opening, setOpening] = useState(false);
  const [destroyed, setDestroyed] = useState(false);

  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  const handleClick = () => {

    if (opening || destroyed) return;

    setOpening(true);

    setTimeout(() => {
      onReveal();
      setDestroyed(true);
    }, 4000);

  };

  if (destroyed) return null;

  return (
    <div
      className={`box ${randomColor} ${opening ? "open" : ""}`}
      onClick={handleClick}
    >
      🎁
    </div>
  );

};

export default MysteryBox;