import React from "react";


const Loading = () => {
  return (
    <div className="flex justify-center items-center">
        <i className="fas fa-spinner fa-spin " style={{
            fontSize: "2.5rem",
            color: "#1877f2"
        }}></i>
    </div>
  );
};

export default Loading;
