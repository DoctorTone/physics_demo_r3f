import React from "react";
import Typography from "@mui/material/Typography";
import { getDeviceStatus } from "../config/Config.js";

const TextInfo = () => {
  const isMobile = getDeviceStatus();

  return (
    <div id="textInfo" className="panel text-center outlineBlack">
      <Typography variant="h5">
        {isMobile
          ? "Tap on screen to aim and throw!"
          : "Use the mouse to aim and click to throw!"}
      </Typography>
      <Typography variant="h5">Hit all 3 targets!</Typography>
    </div>
  );
};

export default TextInfo;
