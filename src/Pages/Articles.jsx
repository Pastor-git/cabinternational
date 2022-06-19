import React from "react";

import ArticleList from '../Components/ArticleList/ArticleList'

import './Wrapper.css';

class Articles extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id: 1, author: 'Jan', title: 'Nagłówek 1', intro: 'Ciekawy artykuł 1'},
        {id: 2, author: 'Jan', title: 'Nagłówek 2', intro: 'Ciekawy artykuł 2'},
        {id: 3, author: 'Jan', title: 'Nagłówek 3', intro: 'Ciekawy artykuł 3'},
      ],
    }
  }


  render() {
    return (<div>

        <ArticleList data={this.state.data}/>
        </div>)
  }
}

export default Articles;
