import React from "react";
import Header from "../Header/Header";

const NoMatch = () => {
  return (
    <div>
      <Header />
      <hr />
      <h1 className="text-danger text-center mt-5">404 NOT FOUND!</h1>
    </div>
  );
};

export default NoMatch;
