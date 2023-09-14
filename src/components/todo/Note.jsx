import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Note({ id, note, title, deleteNote }) {
  function handleClick() {
    deleteNote(id);
  }

  return (
    <div>
      <a
        href="#"
        className="max-w-sm w-60 flex flex-col p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 whitespace-normal">
          {note}
        </p>
      </a>
    </div>
  );
}

export default Note;
