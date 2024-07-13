import React from "react";

const TriangleIcon = ({ color, rotate }) => {
  const fillColor =
    color === "green" ? "#00994D" : color === "red" ? "#D71D30" : "none";
  const rotation = rotate ? "rotate(90deg)" : "none";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill={fillColor}
      className="lucide lucide-triangle"
      style={{ transform: rotation }}
    >
      <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    </svg>
  );
};

export default TriangleIcon;
