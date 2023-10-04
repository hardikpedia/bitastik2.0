import NewsList from "@/components/news/NewsList";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import add from "../../assets/add.gif";
import Image from "next/image";

const NewsPage = ({ data }) => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/api/news");
      setNews(result.data.news);
    };
    fetchData();
  }, []);

  return (
    <div className="w-3/4 ml-8">
      {/* <Link href="/addnews">
        <div>
          <button className="fixed top-0 right-0 m-2 p-2 text-black bg-white rounded-md shadow-md">
            <Image src={add} height={36} width={36} alt="" />
            <span>Add News</span>
          </button>
        </div>
      </Link> */}
      <NewsList data={news} />
    </div>
  );
};

export default NewsPage;
