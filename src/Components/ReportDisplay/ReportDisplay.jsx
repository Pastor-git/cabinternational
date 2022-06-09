import React from "react";

import './ReportDisplay.css'

export const ReporDisplay = (props) => {
  return (
    <div class="report">
      <h1 id="report_title">{props.reportdisplay.name}</h1>
      <img src={props.reportdisplay.img} alt="jpg1" />
      <h2>
        <text>{props.reportdisplay.text}</text>
      </h2>

    </div>
  );
};

export default ReporDisplay;