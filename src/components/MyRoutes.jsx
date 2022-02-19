import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Results, Search } from ".";

const MyRoutes = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route exact path="/" element={<Navigate replace to="/search" />} />
        {["/search", "/images", "/news", "videos"].map((path, index) =>{
          return(
            <Route path={path} element={<Results />} key={index} />
          )
        })}
      </Routes>
    </div>
  );
};

export default MyRoutes;
