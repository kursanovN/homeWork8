import React from "react";

export const Buttons = ({ children, onClick }) => {
  return  (
  <button onClick={onClick}>{children}</button>
  )
};
