import React from "react";
import "./Loader.scss";

export const Loader = ({ loader = true }) => {
  return (
    <>
      {loader ? (<div className="spinner"></div>) : ""}
    </>

  );
};
