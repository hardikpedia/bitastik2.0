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
    <div className="absolute inset-0 lg:inset-x-64 transition-inset md:transition-inset-0.3s">
      <NewsList data={news} />
  
    </div>
  );
};

export default NewsPage;


