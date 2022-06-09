import React from "react";
import CounterButton from "../Components/CounterButton/CounterButton";
import ReportList from "../Components/ReportList/ReportList";

import cab1 from '../gfx/reports_gfx/cab1.jpg';
import cab2 from '../gfx/reports_gfx/cab2.jpg';
import cab3 from '../gfx/reports_gfx/cab3.jpg';
import cab4 from '../gfx/reports_gfx/cab4.jpg';
import text from '../Test/text.txt'
import './Wrapper.css';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      report_list: [
        { name: 'rep1', text: text, img: cab1 },
        { name: 'rep2', text: text, img: cab2 },
        { name: 'rep3', text: text, img: cab3 },
        { name: 'rep4', text: text, img: cab4 },
      ],
    }
  }
  render() {
    return (
      <div class="wrap">
        <CounterButton />
        <ReportList report_list={this.state.report_list} />
      </div>
    );
  }
}

export default List;
