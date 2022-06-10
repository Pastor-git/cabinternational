
import React from "react";

import Article from '../Article/Article'

import './ArticleList.css'

export const ArticleList = (props) => {
    return(
        <div>
  {props.data.map((article) =>
        (
          <Article key={`news-${article.id}`}
          article={article}
          title={article.title}
          intro={article.intro}
          author={article.author}/>
        ))}
        </div>
    );
}

export default ArticleList;