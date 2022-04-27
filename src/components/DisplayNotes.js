import React, { useState } from "react";
import DisplayDate from "./DisplayDate";

const DisplayNotes = (props) => {
  const [searchNote, setSearchNote] = useState("");
  const searchNoteHandler = (event) => {
    setSearchNote(event.target.value);
   
  };
  return (
    <React.Fragment>
      <div className="diplay_note_container">
        <div>
          <div className="searchNote">
          
              <input
                type="text"
                placeholder="Search Note..."
                onChange={searchNoteHandler}
              />
          </div>
         
        </div>
        {props.data
          .filter((data_elements) => {

            if (searchNote === "") {
              var dt= data_elements;
            } else if (
              data_elements.note
                .toLowerCase()
                .includes(searchNote.toLowerCase())
            ) {
              var df= data_elements;
            }
          
            return dt || df;
          })
          .map((data_elements) => {
            return (
              <div className="diplay_note_data" key={data_elements.id}>
                <DisplayDate dateData={data_elements.date} />
                <div className="note_description">
                  <h2>{data_elements.note}</h2>
                </div>
              </div>
            );
          })}
      </div>
    </React.Fragment>
  );
};

export default DisplayNotes;
