import React from "react";

import ReportDisplay from "../ReportDisplay/ReportDisplay";

export const ReportList = (props) => {
  return (
    <div>
      {props.report_list.map((props) => {
        return (
          <ReportDisplay
          name={props.name}
          img={props.img}
          props={props.text} />
        );
      })}
    </div>
  );
};

export default ReportList;
