import React from "react";

const articleLink = (props) => {
  return (
    <div className="articleLink">
      <a href={props.articleUrl}>
        {props.children}
        <p className="title">{props.title}</p>
        <p className="publisher">{props.publisher}</p>
      </a>
    </div>
  );
};

export default articleLink;
