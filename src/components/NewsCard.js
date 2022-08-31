import React from "react";
import "../NewsCard.css";

const NewsCard = (props) => {
  return (
    <div className="card-container">
      <img src={props.image} />
      <header>
        <h1>{props.heading}</h1>
        <p>{props.body}</p>
      </header>
    </div>
  );
};
export default NewsCard;
