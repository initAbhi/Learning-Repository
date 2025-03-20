"use client"
import { CldImage } from "next-cloudinary";
import React from "react";

const ImageCard = () => {
  return (
    <article className="card">
      <div className="title-contianer">
        <h4>
          <span className="emoji">ᝰ</span>
          {""}
        </h4>{" "}
        //https://graphemica.com/ᝰ
        <h4>⫶</h4>
      </div>
      <CldImage />
      <div className="controls-container">
        <div className="control-container">
          <input type="checkbox" id="background" name="background" />
          <label htmlFor="background">no background</label>
        </div>
        <div className="control-container">
          <input type="checkbox" id="greyscale" name="greyscale" />
          <label htmlFor="greyscale">no greyscale</label>
        </div>
        <button>🡣 Download</button>
      </div>
      <input value={""} placeholder="Start typing to change image" />
    </article>
  );
};

export default ImageCard;
