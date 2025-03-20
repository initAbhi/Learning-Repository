import React from "react";
import ImageCard from "./ImageCard";
import VideoCard from "./VideoCard";

const Dashboard = () => {
  return (
    <main>
      <h2>Welcome to drive AI</h2>
      <input
        type="text"
        className="main-search"
        placeholder="Search in drive"
        value={""}
      />
      <div className="uploads-container">
        <ImageCard />
        <VideoCard />
      </div>
    </main>
  );
};

export default Dashboard;
