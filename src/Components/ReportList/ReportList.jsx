import { render } from "@testing-library/react";
import React from "react";

import ReportDisplay from "../ReportDisplay/ReportDisplay";

export const ReportList = (props) => {
  render()
  return (
    <div>
      {props.report_list.map((report) => {
        return (
          <ReportDisplay
          report={report}
          name={props.name}
          img={props.img}
          props={props.text}
          key={report.name}/>
        );
      })}
    </div>
  );
};

export default ReportList;
