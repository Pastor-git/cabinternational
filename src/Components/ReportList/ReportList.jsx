import React from "react";

import ReporDisplay from "../ReportDisplay/ReportDisplay";

export const ReportList = (props) => {
  return (
    <div>
      {props.report_list.map((props) => {
        return (
          <ReporDisplay
          name={props.name} 
          img={props.img} 
          props={props.text} />
        );
      })}
    </div>
  );
};

export default ReportList;
