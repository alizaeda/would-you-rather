import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Fragment>
      <div className="mt-3">
        <h1 className="h1 text-center">Page Not Found</h1>
        <h2 className=" text-center">
          <Link to="/">Click Here To Return Home</Link>
        </h2>
      </div>
    </Fragment>
  );
};

export default PageNotFound;
