import React from "react";

function LoadingScreen() {
  return (
    <div className="absolute top-0 left-0 z-50 flex w-screen min-h-screen bg-black bg-opacity-80">
      <div className="mx-auto my-auto ">
        {/* ayamg goreng */}
        <img src="/images/LoadingIcon.gif" alt="" style={{ width: "50px" }} />
      </div>
    </div>
  );
}

export default LoadingScreen;
