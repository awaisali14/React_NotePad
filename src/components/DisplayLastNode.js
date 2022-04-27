import React from "react";

const DisplayLastNode = (props) => {
  return (
    <React.Fragment>
      <div className="diplay_button_container">
      <button  onClick={props.allNotesHandler}>All Notes</button>
        <button onClick={props.LastNodeHandler}>Last Note</button>
      </div>
    </React.Fragment>
  );
};

export default DisplayLastNode;
