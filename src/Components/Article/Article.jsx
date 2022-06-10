import React from "react";

import './Article.css'

export const Article =(props) => {
    return (
        <div class="article">
        <h1 id="article_title">{props.article.title}</h1>
        <h2>
        <p>{props.article.intro}</p>
          <p>{props.article.author}</p>
        </h2>
      </div>
    );
};
export default Article;