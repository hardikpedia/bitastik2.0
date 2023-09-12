import { useState } from "react";
import Image from "next/image";
import whisper from "../../../assets/love-letterrr.png";
import secret from "../../../assets/theek.png";

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
          body: JSON.stringify({ content: value, uid: "123", name: "Rahul" }),
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
    <nav className="flex flex-row justify-between p-5 bg-gradient-to-r from-gray-700 to-gray-900 rounded-b-xl">
      <div className="md:flex md:items-center">
        <span className="inline-block">
          <Image src={secret} height={48} width={48} alt="secret" />
        </span>
        <span className="text-xl font-semibold ml-2">CONFESSIONS</span>
      </div>
      <div className="search_box mr-4 mb-4  md:mb-0 flex items-center border border-gray-300 rounded-lg p-2 bg-white">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="flex items-center "
        >
          <textarea
            type="search"
            placeholder="What's in your mind bhai/bhench ?"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="border-none rounded-l-md p-2 sm:w-96  text-gray-700 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-gray-700 text-white hover:bg-gray-800 hover:text-white rounded-r-md p-2 ml-2 transition duration-300 ease-in-out"
            onClick={handleClick}
          >
            <Image src={whisper} alt="Whisper" className="w-6 h-6" />
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Cheader;
