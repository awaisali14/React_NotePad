import React, { useState } from "react";
import AddNote from "./components/AddNote";
import DisplayLastNode from "./components/DisplayLastNode";
import DisplayNotes from "./components/DisplayNotes";

const initial_data = [
  {
    note: "Learn React",
    date: new Date(2020, 7, 14),
    id: "1",
  },
  {
    note: "Learn React Native",
    date: new Date(2021, 2, 12),
    id: "2",
  },
];
function App() {
  const [data, setNewData] = useState(initial_data);

  const [lastNode, setLastNode] = useState(false);

  const onSaveDataHandler = (data) => {
    // console.log(data);
    const newdata = {
      ...data,
      id: Math.random().toString(),
    };

    setNewData((prevdata) => {
      const updatedData = [...prevdata];
      updatedData.unshift(newdata);
      // console.log(updatedData);
      return updatedData;
    });
    if (lastNode === true) {
      setLastNode(false);
    }
    // console.log(lastNode);
  };
  const LastNodeHandler = () => {
    setLastNode(true);
  };

  const allNotesHandler = () => {
    setLastNode(false);
  };
  const lastNodeData = [data[0]];
  return (
    <React.Fragment>
      <AddNote onSaveData={onSaveDataHandler} />
      <DisplayLastNode
        LastNodeHandler={LastNodeHandler}
        allNotesHandler={allNotesHandler}
      />

      <DisplayNotes data={!lastNode ? data : lastNodeData} />
    </React.Fragment>
  );
}

export default App;
