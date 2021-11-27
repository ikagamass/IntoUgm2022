import React from "react";

function TitleText({ judul }) {
  return (
    <h4 className="hidden mb-8 text-4xl font-bold sm:block font-acakadut text-myDarkBlue">
      {judul}
    </h4>
  );
}

export default TitleText;
