import React from "react";
import "./card.css";

const Card = ({ src, Color, days, view, read, comment }) => {
  return (
    <>

    
      <div id="container">
        <div className="image">
          <img src={src} alt="dp" width="100%" height="100%" />
        </div>
        <div className="text">
          <p className="time" style={{ color: Color }}>
            {days} days ago
          </p>
          <h2>Post Office</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
            iste. Ipsam vitae rem, sapiente
          </p>
        </div>
        <div className="stats" style={{ backgroundColor: Color }}>
          <div>
            {read}
            <sup>M</sup>
            <h4>Read</h4>
          </div>
          <div>
            {view}
            <h4>Views</h4>
          </div>
          <div>
            {comment}
            <h4>Comments</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
