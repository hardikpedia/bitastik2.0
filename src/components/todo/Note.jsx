import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Note({id,note,title,deleteNote}) {
  function handleClick() {
    deleteNote(id);
  }

  return (
    <div className="note bg-white rounded-lg shadow-md p-4 w-60 m-4">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{note}</p>
    <button onClick={handleClick} className="float-right w-8 h-8 bg-black text-white hover:bg-gray-900 rounded-full flex items-center justify-center">
      <DeleteIcon />
    </button>
  </div>
  
  );
}

export default Note;
