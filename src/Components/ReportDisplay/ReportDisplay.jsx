import React from "react";

import './ReportDisplay.css'

export const ReportDisplay = (props) => {
  return (
    <div class="report">
      <h1 id="report_title">{props.report_list.name}</h1>
      <img src={props.report_list.img} alt="jpg1" />
      <h2>
        <text>{props.report_list.text}</text>
      </h2>

    </div>
  );
};

export default ReportDisplay;