import React from "react";

import './Article.css'

export const Article =(props) => {
    return (
        <div class="article">
        <h1 id="article_title"><a href="https://www.google.pl" class="link">{props.article.title}</a></h1>
        <h2>
          <p>{props.article.intro}</p>
          <p class="author">{props.article.author}</p>
        </h2>
      </div>
    );
};
export default Article;