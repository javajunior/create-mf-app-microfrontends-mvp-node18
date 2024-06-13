import React from "react";
import { Link } from "react-router-dom";

export const HeaderComponent = () => {
  return (
    <div className="div flex items-center justify-around p-4">
      <div className="text-xl font-bold">
        <Link to={"/"}>Home</Link>
      </div>
      <Link to={"/products"}>Products</Link>
    </div>
  );
};
