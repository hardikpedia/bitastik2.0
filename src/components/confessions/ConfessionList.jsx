import ConfessionItem from "./ConfessionItem";
import Image from "next/image";
import whisper from "../../../assets/love-letter.png";
import secret from "../../../assets/secret.png";
import { useState } from "react";


export default function ConfessionList({ confessions ,upvoteHandler,downvoteHandler,refreshConfessions}) {


    const [value, setValue] = useState("");
    const handleClick = async () => {
      if (value.trim() !== "") {
        try {
          const response = await fetch("/api/confession", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ content: value, email: "123"}),
          });
  
          if (response.ok) {
         
            console.log("Confession added successfully");
            setValue("");
            refreshConfessions();
          } else {
            console.error("Failed to add confession");
          }
        } catch (error) {
          console.error("Error adding confession:", error);
        }
      }
    };


return (
  <div className="mt-0">
<nav className="flex flex-col md:flex-row justify-between p-5 bg-gradient-to-r from-gray-700 to-gray-900 rounded-b-xl">
  <div className="md:flex md:items-center">
    <span className="inline-block mb-4 md:mb-0">
      <Image src={secret} height={48} width={48} alt="secret" />
    </span>
    <span className="text-xl font-semibold ml-2 text-center md:text-left">CONFESSIONS</span>
  </div>
  <div className="search_box mt-4 md:mt-0 md:ml-4 flex items-center border border-gray-300 rounded-lg p-2 bg-white">
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="flex flex-col md:flex-row items-center "
    >
      <textarea
        type="search"
        placeholder="What's on your mind, friend?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border-none rounded-l-md p-2 sm:w-full md:w-96 text-gray-700 focus:outline-none mb-2 md:mb-0"
      />
      <button
        type="submit"
        className="bg-gray-700 text-white hover:bg-gray-800 hover:text-white rounded-r-md p-2 transition duration-300 ease-in-out"
        onClick={handleClick}
      >
        <Image src={whisper} alt="Whisper" className="w-6 h-6" />
      </button>
    </form>
  </div>
</nav>


      <div className="feedWrapper p-5">
        {confessions.map((c) => (
          <ConfessionItem key={c._id} confession={c}  upvoteHandler={upvoteHandler} downvoteHandler={downvoteHandler}/>
        ))}
      </div>
    
    </div>
  );
}

