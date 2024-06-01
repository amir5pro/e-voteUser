import React from "react";
import { useRouteError, Link } from "react-router-dom";
import img from "../assets/notFound.svg";
const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <div className="h-screen text-center flex flex-col items-center justify-center">
        <img
          src={img}
          alt="not found"
          className="w-90vw max-w-600 block mb-8 h-[500px]"
        />
        <h3 className="w-">Ohh! page not found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to="/dashboard" className="text-primary-500">
          back home
        </Link>
      </div>
    );
  }
  return (
    <div className="h-screen text-center flex flex-col items-center justify-center">
      <h3>something went wrong</h3>
    </div>
  );
};

export default Error;
