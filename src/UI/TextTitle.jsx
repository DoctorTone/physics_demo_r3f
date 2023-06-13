import React from "react";
import Typography from "@mui/material/Typography";

const TextTitle = () => {
  const handleMenu = (event) => {
    event.preventDefault();
  };

  return (
    <div
      id="textTitle"
      className="panel text-center outlineRed"
      onContextMenu={handleMenu}>
      <Typography variant="h5">Dunk the Laughing Robot!</Typography>
    </div>
  );
};

export default TextTitle;
