import React from "react";
import Typography from "@mui/material/Typography";

const TextInfo = () => {
  return (
    <div id="textInfo" className="panel text-center outlineBlack">
      <Typography variant="h5">
        Use the mouse to aim and click to throw!
      </Typography>
      <Typography variant="h5">Hit all 3 targets!</Typography>
    </div>
  );
};

export default TextInfo;
