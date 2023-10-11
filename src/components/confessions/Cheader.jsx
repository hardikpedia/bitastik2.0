import { useState } from "react";

import Image from "next/image";
import whisper from "../../../assets/love-letter.png";
import secret from "../../../assets/secret.png";
function Cheader({ refreshConfessions }) {
  const [value, setValue] = useState("");
  const handleClick = async () => {
    if (value.trim() !== "") {
      try {
        const response = await fetch("/api/confession", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ content: value, email: "hardik" }),
        });

        if (response.ok) {
          // Successfully added the confession to the database
          // You can handle any additional logic here
          console.log("Confession added successfully");
          setValue("");
          refreshConfessions();
        } else {
          // Handle errors here
          console.error("Failed to add confession");
        }

        // Clear the input field
      } catch (error) {
        // Handle fetch or other errors
        console.error("Error adding confession:", error);
      }
    }
  };

  return (
<nav className="flex flex-col gap-2 lg:flex-row justify-between p-5 bg-primary rounded-b-xl">
  <div className="flex items-center">
    <span >
      <Image src={secret} height={48} width={48} alt="secret" />
    </span>
    <span className="text-4xl text-white font-semibold ml-2 text-center md:text-left">CONFESSIONS</span>
  </div>
  {/* <div className="search_box mt-4 md:mt-0 md:ml-4 flex items-center border border-gray-300 rounded-lg p-2 bg-primary"> */}
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="flex flex-row items-center "
    >
      <textarea
        type="search"
        placeholder="What's on your mind, friend?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border-none rounded-l-md p-2 w-full md:w-96 text-white focus:outline-none mb-2 md:mb-0 bg-gray-900"
      />
      <button
        type="submit"
        className="bg-primary text-white hover:bg-gray-800 hover:text-white rounded-r-md p-2 transition duration-300 ease-in-out ml-2 w-12 h-12"
        onClick={handleClick}
      >
        <Image src={whisper} alt="Whisper"  />
      </button>
    </form>
  {/* </div> */}
</nav>
  );
}

export default Cheader;
