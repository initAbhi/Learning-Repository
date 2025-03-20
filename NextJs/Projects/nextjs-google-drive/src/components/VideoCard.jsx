"use client"
import React, { useState } from "react";
import { CldVideoPlayer } from "next-cloudinary";

const VideoCard = () => {
    const [isLoading,setIsLoading] = useState(false)

  return (
    <article className="card">
      <div className="title-container">
        <h4>
          <span className="emoji">▶</span>
          {""}
        </h4>
        <h4>⫶</h4>
      </div>
      {isLoading && <p>Loading</p>}
      <div
        className="video-container"
        style={{ visibility: isLoading ? "hidden" : "visible" }}
      >
        {/* <CldVideoPlayer /> */}
      </div>
      <div className="controls-container">
        <div className="control-container">
          <button>🡣 download original</button>
        </div>
      </div>
    </article>
  );
};

export default VideoCard;
