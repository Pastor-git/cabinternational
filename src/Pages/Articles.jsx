import React from "react";

import Article from '../Components/Article/Article'

import './Wrapper.css';

class Articles extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id: 1, author: 'Jan', title: 'Nagłówek 1', intro: 'Intro 1,'},
        {id: 2, author: 'Jan', title: 'Nagłówek 2', intro: 'Intro 2,'},
        {id: 3, author: 'Jan', title: 'Nagłówek 3', intro: 'Intro 3,'},
      ],
    }
  }


  render() {
    return (<div>
      {/* {data.map((elem) =>
        (
          <Article key={`news-${elem.id}`}
          header={elem.title}
          intro={elem.intro}
          author={elem.author}/>
        ))} */}
        </div>)
  }
}

export default Articles;
