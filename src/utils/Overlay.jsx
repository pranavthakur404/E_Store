import React from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { toggle } from "../features/ToggleOver";

const Overlay = () => {
  const dispatch = useDispatch();
  const toggleOverlay = useSelector((state) => {
    return state.overlay.isOpen;
  });

  if (!toggleOverlay) {
    return null;
  }

  const handleClick = () => {
    dispatch(toggle());
  };

  return createPortal(
    <div
      className="fixed inset-0 bg-[rgba(0,0,0,0.9)] z-[4]"
      onClick={handleClick}
    ></div>,
    document.getElementById("overlay")
  );
};

export default Overlay;
