import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Card from '../Card';
import shinchan from '../../../assets/shinchan.jpg';
import Modal from './modal';
function NewsItem(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();

  function showDetailsHandler() {
    setIsModalOpen(true);
  }

  function closeModalHandler() {
    setIsModalOpen(false);
  }

  return (
    <li className="w-3/5 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
      <Card>
        <div className="aspect-w-3 aspect-h-2">
          <Image src={shinchan} alt="" className="object-cover" />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">{props.title}</h3>
          <p className="text-sm text-gray-600">{props.date}</p>
        </div>
        <div className="p-4">
          <button
            onClick={showDetailsHandler}
            className="block mx-auto bg-red-500 text-white px-4 py-2 rounded font-bold cursor-pointer hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
          >
            Show Details
          </button>
        </div>
      </Card>

      {/* Render the modal */}
      {console.log(props)}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModalHandler}
        title={props.title}
        content={props.description}
      />
    </li>
  );
}

export default NewsItem;
