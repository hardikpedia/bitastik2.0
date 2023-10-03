import { format } from "timeago.js";
import Upvote from "../../../assets/upvote.png";
import Downvote from "../../../assets/downvote.png";
import { useSession } from "next-auth/react";
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import Image from "next/image";

function ConfessionItem({ confession, upvoteHandler,downvoteHandler }) {

  
  const { data: session, status } = useSession()

  console.log('====================================');
  console.log(session.user.email);
  console.log('====================================');

  function downvote() {
    downvoteHandler(confession._id);
 
  }

  function upvote() {
    upvoteHandler(confession._id);

  }

  const userVote = confession.votedBy.find(
    (vote) => vote.email === session.user.email
  );

  const isUpvoted = userVote && userVote.vote === "upvote";
  const isDownvoted = userVote && userVote.vote === "downvote";
  return (
  <div className=" p-4   rounded-lg shadow bg-gray-900 border-gray-700 hover:bg-gray-700 text-gray-400 mb-4">
  <div className="max-w-xl"> {/* Set a maximum width */}
    <div className="text-lg mb-2">{confession.content}</div>
  </div>
  <div className="flex justify-between items-center">
    <div className="flex items-center space-x-2">
      <button
       className={`flex items-center space-x-1 cursor-pointer ${isUpvoted ? ' text-blue-500' : ''}`}
        onClick={upvote}
      >
    {isUpvoted ? (
              <ThumbUpIcon fontSize="small" />
            ) : (
              <ThumbUpOffAltIcon fontSize="small" />
            )}
        <span>{confession.upvotes}</span>
      </button>
      <button
        className={`flex items-center space-x-1 cursor-pointer ${isDownvoted ? ' text-red-500' : ''}`}
        onClick={downvote}
      >
         {isDownvoted ? (
              <ThumbDownAltIcon fontSize="small" />
            ) : (
              <ThumbDownOffAltIcon fontSize="small" />
            )}
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
