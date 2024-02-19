import React from "react";
import { ColorRing } from "react-loader-spinner";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center">
      <ColorRing
        visible={true}
        height="50"
        width="50"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#ffffff"]}
      />
    </div>
  );
};

export default LoadingSpinner;
