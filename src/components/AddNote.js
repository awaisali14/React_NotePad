import React, { useState } from "react";

const AddNote = (props) => {
  const [NoteData, ChangeNoteData] = useState("");
  const [enteredDate, ChangeEnertedDate] = useState("");

  const NoteDataHandler = (event) => {
    ChangeNoteData(event.target.value);
  };
  const dateChangeHandler = (event) => {
    ChangeEnertedDate(event.target.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const data = {
      note: NoteData,
      date: new Date(enteredDate),
    };
    if (NoteData.trim().length === 0 || enteredDate.length === 0) {
      return;
    }
    // console.log(data);
    props.onSaveData(data);
    ChangeNoteData("");
    ChangeEnertedDate("");
  };

  return (
    <React.Fragment>
      <div className="add_note_container">
        <form onSubmit={onSubmitHandler}>
          <div className="note_input">
            <label htmlFor="note">Add Note:</label>
            <input
              type="text"
              id="note"
              value={NoteData}
              onChange={NoteDataHandler}
            />
          </div>
          <div className="note_input">
            <label htmlFor="date">Select Date:</label>
            <input
              type="date"
              id="date"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
          <div className="button_class">
           
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default AddNote;
