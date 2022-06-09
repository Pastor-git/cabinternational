import React from "react";

import './ReportDisplay.css'

export const ReportDisplay = (props) => {
  return (
    <div class="report">
      <h1 id="report_title">{props.report.name}</h1>
      <img src={props.report.img} alt="jpg1" />
      <h2>
        <p>{props.report.text}</p>
      </h2>

    </div>
  );
};

export default ReportDisplay;