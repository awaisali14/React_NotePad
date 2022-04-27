import React from "react";

const DisplayDate = (props) => {
  const month = props.dateData.toLocaleString("en-US", { month: "long" });
  const day = props.dateData.toLocaleString("en-US", { day: "2-digit" });
  const year = props.dateData.toLocaleString("en-US", { year: "numeric" });
  return (
    <React.Fragment>
      <div className="note-date ">
        <div className="note-date_month">{month}</div>
        <div className="note-date_day">{day}</div>
        <div className="ote-date_year">{year}</div>
      </div>
    </React.Fragment>
  );
};

export default DisplayDate;
