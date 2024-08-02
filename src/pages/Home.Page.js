import React from "react";
import { useNavigate } from "react-router-dom";
// Layout
import HomeLayout from "../layouts/Homepage.layout";

const HomePage = () => {
  const navigate = useNavigate();
  const navigateToDemo = () => {
    navigate("/demo");
  };
  return (
    <>
      <div>HomePage</div>;
      <p>Click on the button to check the redux is working</p>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={navigateToDemo}
      >
        Demo
      </button>
    </>
  );
};

export default HomeLayout(HomePage);
