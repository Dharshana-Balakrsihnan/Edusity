import React from "react";
import "./Title.css";

const Title = ({ subTitle, title }) => {
  // we receive subTitle , title from props and we using our web page title
  return (
    <div className="title">
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </div>
  );
};

export default Title;
