import NewsList from "@/components/news/NewsList";
import useSWR from "swr";
import axios from "axios";
import { useEffect,useState } from "react";


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
    <div className="w-3/4">
      <NewsList data={news} />
  
    </div>
  );
};

export default NewsPage;


