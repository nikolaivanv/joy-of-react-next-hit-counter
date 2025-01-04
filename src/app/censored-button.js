"use client";

import React from "react";

const CensoredButton = ({ children }) => {
  const [isCensored, setIsCensored] = React.useState(true);

  return (
    <button
      className={isCensored ? "censored" : null}
      onClick={() => {
        setIsCensored(!isCensored);
      }}
    >
      {children}
    </button>
  );
};

export default CensoredButton;
