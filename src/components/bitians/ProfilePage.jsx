import ProfileCard from "./ProfileCard";
import { useState, useEffect } from "react";
import Image from "next/image";
function Profilepage() {
  const uid = "60b0e9a8a4b6d4b0c4c6c9e3";
  const [info, setInfo] = useState({});
  useEffect(() => {
    
    const fetchData = async () => {
      const userData = await fetch(`/api/user?email=${email}`);
      const data = await userData.json();
      console.log(data);
      setInfo(data.users);
    };
    fetchData();
  
  }, []);
  return (
    <div>
      <ProfileCard info={info}/>
    </div>
  );
}

export default Profilepage;
