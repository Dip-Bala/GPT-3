import React from 'react';
import './Article.css';
const Article = (props) => {
  return (
    <div className="gpt3-article">
      <div className="gpt3-article-image">
        <img src={props.imgURL} alt="blog-image" />
      </div>
      <div className="gpt3-article-content">
        <div>
          <p>{props.date}</p>
          <h3>{props.text}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article