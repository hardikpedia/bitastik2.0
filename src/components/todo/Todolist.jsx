import React, { useState } from "react";
import Image from "next/image";
import noting from "../../../assets/noty.png";
import Note from "./Note";
import CreateArea from "./CreateArea";

function Todolist({notes_old,addNote,deleteNote}) {
  
  return (
    <div>
      <div>
      <header className="bg-gray-800 py-4 mb-4 rounded-b-xl shadow">
    <h1 className="text-white text-center text-3xl font-semibold">
      <Image
        src={noting}
        height={40}
        width={40}
        alt="noting"
        className="inline-block mr-2"
      />
      BITNotes
    </h1>
  </header>
      </div>
      <div>
        <CreateArea addNote={addNote} />
        <div className="flex flex-wrap">
        {notes_old.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              note={noteItem.note}
              deleteNote={deleteNote}
            />
          );
        })}
        </div>
      </div>
    </div>
  );
}


export default Todolist;


