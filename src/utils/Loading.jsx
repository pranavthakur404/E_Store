import React from "react";

import loadingImg from "../assets/loading.gif";

const Loading = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <img src={loadingImg} alt="Loading..." className="w-[100px]" />
    </div>
  );
};

export default Loading;
