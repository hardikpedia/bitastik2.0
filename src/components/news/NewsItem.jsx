import React, { useState } from "react";
import Image from "next/image";
import shinchan from "../../../assets/shinchan.jpg";
import Modal from "./Modal";

function NewsItem(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function showDetailsHandler() {
    setIsModalOpen(true);
  }

  
  const truncatedDescription = props.description.length > 25
    ? props.description.slice(0, 25) + "..."
    : props.description;


  

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-4 my-4">
      
        <Image className="rounded-t-lg" src={shinchan} alt="" />
    
      <div className="p-5">
       
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.title}
          </h5>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.createdAt}
          </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {truncatedDescription}
          {props.description.length > 25 && (
            <span
              onClick={showDetailsHandler}
              className="text-blue-700 cursor-pointer"
            >
              {" "}
              ...Read more
            </span>
          )}
        </p>
        <Modal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          title={props.title}
          content={props.description}
        />
      </div>
    </div>
  );
}

export default NewsItem;
