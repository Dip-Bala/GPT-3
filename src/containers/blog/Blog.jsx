import React from 'react';
import './Blog.css';
import Article from '../../components/article/Article';

const Blog = () => {
  return (
    <div  className="gpt3-blog section-margin">
      <div className="gpt3-blog-heading">
        <h1 className = "gradient-text">A lot is happening, <br></br>
        We are blogging about it.</h1>
      </div>
      <div className="gpt3-blog-Articles">
        <div className="gpt3-blog-Articles-left">
          <Article imgURL = "../../assets/blog01.png" date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
        <div className="gpt3-blog-Articles-right">
        <Article imgURL=  "../../assets/blog02.png" date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgURL=  "../../assets/blog03.png" date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgURL=  "../../assets/blog04.png" date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgURL=  "../../assets/blog05.png" date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        </div>
      </div>
    </div>
  )
}

export default Blog