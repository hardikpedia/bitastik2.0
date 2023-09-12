import React from 'react';

function Modal({ isOpen, onClose, title, content }) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-overlay" onClick={onClose}></div>
          <div className="modal-container bg-white rounded-lg shadow-lg w-1/2 md:w-1/3">
            <div className="modal-content p-4">
              <h2 className="text-lg font-semibold mb-2">{title}</h2>
              <p className="text-gray-600">{content}</p>
            </div>
            <div className="modal-footer p-2">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded font-bold cursor-pointer hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
