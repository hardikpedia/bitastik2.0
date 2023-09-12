import { format } from "timeago.js";
import Upvote from "../../../assets/upvote.png";
import Downvote from "../../../assets/downvote.png";
import Image from "next/image";

function ConfessionItem({ confession, upvoteHandler,downvoteHandler }) {


  

  function downvote() {
    downvoteHandler(confession._id);
 
  }

  function upvote() {
    upvoteHandler(confession._id);

  }

  return (
  <div className="border rounded-lg p-4 shadow-md bg-gradient-to-b from-gray-800 to-gray-200 text-white mb-4">
  <div className="max-w-xl"> {/* Set a maximum width */}
    <div className="text-lg mb-2">{confession.content}</div>
  </div>
  <div className="flex justify-between items-center">
    <div className="flex items-center space-x-2">
      <button
        className="flex items-center space-x-1 cursor-pointer"
        onClick={upvote}
      >
        <Image src={Upvote} alt="Upvote" className="w-4 h-4" />
        <span>{confession.upvotes}</span>
      </button>
      <button
        className="flex items-center space-x-1 cursor-pointer"
        onClick={downvote}
      >
        <Image src={Downvote} alt="Downvote" className="w-4 h-4" />
        <span>{confession.downvotes}</span>
      </button>
    </div>
    <div className="text-xs text-gray-500 mt-2 md:mt-0">
      {format(new Date(confession.createdAt), "MMM dd, yyyy")}
    </div>
  </div>
</div>

  );
}

export default ConfessionItem;
