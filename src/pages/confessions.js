import ConfessionList from "@/components/confessions/ConfessionList";
import useSWR from "swr";
import axios from "axios";

const ConfessionPage = () => {
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, mutate, error } = useSWR("/api/confession", fetcher, {
    refreshInterval: 1000,
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
  });

  if (!data) return <div>Loading...</div>;

  const refreshConfessions = () => {
    mutate();
  };
  const upvoteHandler = async (_id) => {
    const response = await axios.put("/api/confession", {
      email: "hardikgupta0506@gmail.com",
      _id: _id,
      vote: "upvote",
    });

    refreshConfessions();
  };

  const downvoteHandler = async (_id) => {
    const response = await axios.put("/api/confession", {
      email: "hardikgupta0506@gmail.com",
      _id: _id,
      vote: "downvote",
    });

    refreshConfessions();
  };



  return (
    <div className="w-3/4 ml-4 ">
      <ConfessionList
        confessions={data.confessions}
        upvoteHandler={upvoteHandler}
        downvoteHandler={downvoteHandler}
        refreshConfessions={refreshConfessions}
      />
    </div>
  );
};

export default ConfessionPage;
