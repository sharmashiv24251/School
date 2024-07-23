import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const NotFound = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRedirect = () => {
    navigate("/"); // Redirect to the home page
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
      <p className="text-lg mb-6">
        The page you are looking for does not exist.
      </p>
      <button
        onClick={handleRedirect}
        className="bg-orange-600 text-white hover:bg-orange-700 px-4 py-2 rounded"
      >
        Go to Home
      </button>
    </div>
  );
};

export default NotFound;
