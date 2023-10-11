import NewsList from "@/components/news/NewsList";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import add from "../../assets/add.gif";
import Image from "next/image";
import { useSession } from "next-auth/react";

const NewsPage = ({ news }) => {
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios.get("/api/news");
  //     setNews(result.data.news);
  //   };
  //   fetchData();
  // }, []);
  const { data: session, status } = useSession()

  return (
    <div className="w-3/4 ml-8">
     {session.user.email==="hardikgupta0506@gmail.com" || session.user.email==="akshayrajkushwah@gmail.com"? <Link href="/addnews">
        <div>
          <button className="fixed top-0 right-0 m-2 p-2 text-black bg-white rounded-md shadow-md">
            <Image src={add} height={36} width={36} alt="" />
            <span>Add News</span>
          </button>
        </div>
      </Link>:null}
      <NewsList data={news} />
    </div>
  );
};


export async function getServerSideProps() {
  try {
    const response = await axios.get("/api/news");
    const news= response.data.news;
  
    return {
      props: {
        news,
      },
    };
  } catch (error) {
    console.error("Error fetching initial data:", error);
    return {
      props: {
        initialData: null,
      },
    };
  }
}


export default NewsPage;