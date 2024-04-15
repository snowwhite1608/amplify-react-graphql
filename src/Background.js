import React from "react";
import backgroundImage from "background.jpg"; // Import your background image

const Background = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw", // Full width of the viewport
        height: "100vh", // Full height of the viewport
      }}
    >
      {/* Content of your component */}
    </div>
  );
};

export default Background;
